import { emit } from "./event-bus.js";
const state = {
  currentView: "map",
  selectedEntity: null,
  selectedEntityType: null,
  searchQuery: "",
  filters: { entityType: null, organizationLevel: null, status: "active" },
  graph: { zoom: 1, center: null, expandedNodes: [] },
  theme: "light"
};
export function getState(){ return state; }
export function setState(patch){ Object.assign(state, patch); emit("state:change", state); }
