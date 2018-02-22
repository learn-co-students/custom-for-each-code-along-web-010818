function forEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      // const element = collection[i];
      callback(collection[i], i, collection);
    }
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      // const value = collection[key];
      callback(collection[key], key, collection);
    }
  }
}
