# -*- coding: utf-8 -*-
"""Gộp toàn bộ app thành 1 file HTML chạy độc lập (không cần web server).
Chạy: python3 tools/build-single-file.py"""
import re, json, io, os, sys, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def read(p): return io.open(os.path.join(ROOT, p), encoding="utf-8").read()

ORDER = ["js/core/time.js","js/core/config.js","js/core/event-bus.js","js/core/state.js","js/core/router.js",
 "js/data/loader.js","js/data/indexer.js","js/data/validator.js","js/search/search.js",
 "js/graph/graph-layout.js","js/graph/nodes.js","js/graph/edges.js","js/graph/graph.js",
 "js/ui/toast.js","js/ui/tabs.js","js/ui/detail-panel.js","js/views/views.js","js/app.js"]
CSS = ["css/main.css","css/layout.css","css/components.css","css/graph.css","css/responsive.css"]
DATASETS = ["organizations","people","positions","relationships","procedures","documents","licenses","facilities","forms","sources"]

def key(path): return os.path.splitext(os.path.basename(path))[0]

IMPORT_RE = re.compile(r'^\s*import\s*\{([^}]+)\}\s*from\s*["\']([^"\']+)["\'];?\s*$', re.M)
EXPORT_DECL = re.compile(r'^\s*export\s+(async\s+function|function|const|let|class)\s+([A-Za-z0-9_$]+)', re.M)

def bundle_module(path):
    src = read(path)
    names = [m.group(2) for m in EXPORT_DECL.finditer(src)]
    def repl(m):
        imported = [x.strip().split(" as ")[0].strip() for x in m.group(1).split(",") if x.strip()]
        mod = key(m.group(2))
        return "  const { %s } = __M[%s];" % (", ".join(imported), json.dumps(mod))
    src = IMPORT_RE.sub(repl, src)
    src = re.sub(r'^\s*export\s+', "", src, flags=re.M)
    body = "\n".join("  " + l for l in src.splitlines())
    return '__M[%s] = (function(){\n%s\n  return { %s };\n})();' % (json.dumps(key(path)), body, ", ".join(names))

# dữ liệu nhúng thẳng, không fetch
data = {}
for name in DATASETS:
    try: data[name] = json.load(io.open(os.path.join(ROOT, "data", name + ".json"), encoding="utf-8"))
    except Exception: data[name] = []
embedded = "window.__VNADMIN_DATA__ = %s;" % json.dumps(data, ensure_ascii=False, separators=(",", ":"))

# loader đọc từ biến nhúng
loader_patch = '''__M["loader"] = (function(){
  const DATASETS = %s;
  async function loadAllData(){ return window.__VNADMIN_DATA__ || {}; }
  return { DATASETS, loadAllData };
})();''' % json.dumps(DATASETS)

mods = []
for p in ORDER:
    mods.append(loader_patch if key(p) == "loader" else bundle_module(p))
js = "const __M = {};\n" + "\n\n".join(mods)

html = read("index.html")
# bỏ link css + script module, chèn inline
html = re.sub(r'\s*<link rel="stylesheet" href="\./css/[^"]+">', "", html)
html = html.replace('<script type="module" src="./js/app.js"></script>', "")
css = "\n".join("/* %s */\n%s" % (c, read(c)) for c in CSS)

TITLE = "Bộ máy hành chính Việt Nam"
DESC = "giúp người xem hiểu cấu trúc và các đơn vị của bộ máy chính quyền Việt Nam"
today = datetime.date.today()
FOOTER = ('<div style="text-align:center;font-family:\'Inter\',sans-serif;font-size:0.7rem;'
  'color:var(--c-text-muted);padding:18px 10px 26px;letter-spacing:0.03em;">'
  'haphanhp — Tổng hợp · Tháng %d, %d</div>') % (today.month, today.year)

html = html.replace("<title>VN Admin Map — Sơ đồ bộ máy hành chính Việt Nam</title>",
  '<title>%s</title>\n<meta name="description" content="%s">' % (TITLE, DESC))
html = html.replace("</head>", "<style>\n%s\n</style>\n</head>" % css)
html = html.replace("</body>", "%s\n<script>\n%s\n</script>\n<script type=\"module\">\n%s\n</script>\n</body>" % (FOOTER, embedded, js))

out = os.path.join(ROOT, "publish", "bo-may-hanh-chinh-viet-nam.html")
io.open(out, "w", encoding="utf-8").write(html)
print("Đã tạo:", out, "|", round(os.path.getsize(out)/1024), "KB")
