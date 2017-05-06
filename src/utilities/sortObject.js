// perform operations on JS objects
export default {
  // sometimes iterating over an object's properties is not done alphabetically
  // use this method to get things back in working order
  byPropertyAlphabetical: function (objectToSort) {
    let propertyNames = [];
    let sortedObject = {};

    // get all property names
    for (let propertyName in objectToSort) {
      if (objectToSort.hasOwnProperty(propertyName)) {
        propertyNames.push(propertyName);

      }

    }

    // sort alphabetically
    propertyNames.sort();

    // create sorted object
    for (let i = 0, h = propertyNames.length; i < h; i++) {
      let propertyName = propertyNames[i];

      sortedObject[propertyName] = objectToSort[propertyName];

    }

    return sortedObject;

  }

}
