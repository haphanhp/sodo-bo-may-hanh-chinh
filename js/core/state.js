import { emit } from "./event-bus.js";
import { TODAY } from "./time.js";
const state = {
  currentView: "map",
  data: null, index: null, report: null, loadError: null, searchDocs: null,
  selectedEntity: null, selectedEntityType: null,
  searchQuery: "",
  asOf: TODAY,
  filters: { entityType: null, organizationLevel: null, status: "active" },
  graph: { zoom: 1, center: null, expandedNodes: [] },
  theme: "light"
};
export function getState(){ return state; }
export function setState(patch){ Object.assign(state, patch); emit("state:change", state); }
