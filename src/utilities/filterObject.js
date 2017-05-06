// perform operations on JS objects
export default {
  byProperty: function (objectToFilter, propertyToFilterOn, filterValue) {
    // ensure data is returned if no provided filter filterValue
    if (filterValue) {
      let filtered = {};

      // perform the filter
      for (var key in objectToFilter) {
        let singleObjectItem = objectToFilter[key];

        if (singleObjectItem && singleObjectItem[propertyToFilterOn] && singleObjectItem[propertyToFilterOn].toLowerCase().indexOf(filterValue) > -1) {
          filtered[key] = singleObjectItem;

        }

      }

      return filtered;

    } else {
      return objectToFilter;

    }

  }

}
