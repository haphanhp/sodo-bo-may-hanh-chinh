// loader.js — đọc data/*.json. Không chứa dữ liệu hành chính.
import { APP } from "../core/config.js";
export const DATASETS = ["organizations","people","positions","relationships","procedures","documents","licenses","facilities","forms","sources"];
async function loadJSON(name){
  try{
    const res = await fetch(`${APP.dataDir}${name}.json`, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return Array.isArray(json) ? json : (json.items ?? []);
  }catch(err){
    console.warn(`[loader] Không đọc được ${name}.json:`, err.message);
    return [];
  }
}
export async function loadAllData(){
  const arrays = await Promise.all(DATASETS.map(loadJSON));
  return Object.fromEntries(DATASETS.map((n,i) => [n, arrays[i]]));
}
