function forEach(iterable, cb) {
  if (Array.isArray(iterable)) {
    for (let i = 0; i < iterable.length; i++) {
      const element = iterable[i];
      cb(element, i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (const key in iterable) {
      const val = iterable[key];
      cb(val, key, iterable);
    }
  }
}
