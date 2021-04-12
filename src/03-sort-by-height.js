/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
      const res = arr;
    const arr1 = arr.filter(i => i !== -1).sort((a, b) => a - b);
    for (let j = 0; j < arr.length; j++) {
      if (res[j] !== -1) {
        res[j] = +arr1.splice(0, 1).join();
      }
    }
    return res;
  }


module.exports = sortByHeight;
