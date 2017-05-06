// caches data
export default {
  // return a single cache item
  get: function (key) {
    var cacheItem = localStorage[key];

    if (cacheItem) {
      return JSON.parse(cacheItem);

    } else {
      return undefined;

    }

  },


  // store a single cache item
  set: function (key, data) {
    localStorage[key] = JSON.stringify(data);

  }

};
