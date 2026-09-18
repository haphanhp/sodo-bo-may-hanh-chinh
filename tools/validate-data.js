// tools/validate-data.js — chạy: node tools/validate-data.js
import { readFile } from "node:fs/promises";
import { validateData, formatReport } from "../js/data/validator.js";
const DATASETS = ["organizations","people","positions","relationships","procedures","documents","licenses","facilities","forms","sources"];
const data = {};
for (const name of DATASETS){
  try { const raw = JSON.parse(await readFile(new URL(`../data/${name}.json`, import.meta.url), "utf8")); data[name] = Array.isArray(raw) ? raw : (raw.items ?? []); }
  catch { data[name] = []; }
}
const report = validateData(data);
console.log(formatReport(report));
process.exit(report.ok ? 0 : 1);
