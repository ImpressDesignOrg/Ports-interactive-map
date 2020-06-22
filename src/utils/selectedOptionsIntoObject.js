/**
 * Util function to update state of active locations from selected options from sidebar
 * @param {object} obj - an object of all locations
 * @param {array} selectedArray - an array of selected options from <select>
 */
const selectedOptionsIntoObject = (obj, selectedArray) => {
  let tempState = {};

  Object.keys(obj).forEach((v) => {
    tempState[v] = selectedArray.includes(v) ? true : false;
  });

  return tempState;
};

export default selectedOptionsIntoObject;
