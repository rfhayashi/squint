export function assoc_BANG_(m, k, v, ...kvs) {
  m[k] = v;
  if (kvs.length != 0) {
    return assoc_BANG_(m, ...kvs);
  }
  else return m;
}

export function dissoc_BANG_(m, k) {
  delete m[k];
  return m;
}

export function println(...args) {
  console.log(...args);
}

export function nth(coll, idx) {
  return coll[idx];
}

export function map(f, coll) {
  return coll.map(f);
}