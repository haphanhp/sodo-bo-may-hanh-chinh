const map = new Map();
export function on(evt, fn){ (map.get(evt) ?? map.set(evt, new Set()).get(evt)).add(fn); return () => off(evt, fn); }
export function off(evt, fn){ map.get(evt)?.delete(fn); }
export function emit(evt, payload){ map.get(evt)?.forEach(fn => fn(payload)); }
