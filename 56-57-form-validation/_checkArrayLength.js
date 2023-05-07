/**
 *
 * @param {Array} array Given array for check it's length
 * @param {number} length Given length to check it on array
 * @param {string} itemString Given input name for return appropriate message
 * @returns {string} a string containing message
 */
export default function checkArrayLength(array, length, itemString) {
  if (array.length < length) {
    return `${itemString} should be at least ${length} characters.`
  } else return 'true'
}
