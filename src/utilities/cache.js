// caches data
export default {
  // return a single cache item
  get: function (key) {
    let cacheItem = localStorage.getItem(key);

    if (cacheItem) {
      let cacheData = JSON.parse(cacheItem);

      if (this._validData(cacheData.date)) {
        return cacheData.data;

      } else {
        this.delete(key);

        return undefined;

      }

    } else {
      return undefined;

    }

  },


  // store a single cache item
  set: function (key, data) {
    let cacheItem = {
      date: new Date(),
      data: data

    };

    localStorage.setItem(key, JSON.stringify(cacheItem));

  },


  // delete cache item
  delete: function (key) {
    delete localStorage[key];

  },


  // data will get old; don't use old data
  //TODO: define better rules for each kind of cache item
  _validData: function (cacheDataDateString) {
    let cacheDataDate = new Date(cacheDataDateString);
    let getNewDataDate = new Date();

    if (getNewDataDate.setHours(getNewDataDate.getHours() + 12) > cacheDataDate.getTime()) {
      return true;

    } else {
      return false;

    }


  },


  // clear all cache if criteria met (probably going to be a last resort for error handling)
  _clearAll: function () {
    localStorage.clear();
    sessionStorage.clear();

  }

};
