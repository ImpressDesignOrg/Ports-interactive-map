/**
 * A function to accept a marker feature and iterate over the object and return an
 * html string of all the non-null metadata values in that object
 * @param {object} feature
 * @returns {string} html table
 */
export const handlePopupContent = (feature) => {
  const dataObj = feature.graphic.attributes;

  // TODO why are some metadata columns not pulling through?

  let htmlString = "";

  // iterate over the metadata object and add all non-null values to as a new table in a row
  Object.keys(dataObj).forEach((key) => {
    const value = dataObj[key];

    console.log("key", key);

    // we don't need these keys in the popup
    if (key === "Angle" || key === "ObjectID" || key === "TextString") {
      // ! do nothing (not a placeholder; really do nothing!)
    } else {
      // the returned string only contains non-null values
      if (value !== null) {
        htmlString = htmlString + `<tr><td>${key}</td><td>${value}</td></tr>`;
      }
    }
  });

  return `<table style="width:100%" class="esri-widget__table">${htmlString}</table>`;
};
