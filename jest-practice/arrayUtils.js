/**
 * Sum of array numbers
 * @param {number[]} arr
 * @returns {number}
 */
function sum(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("must be an array");
  }

  return arr.reduce((acc, num) => acc + num, 0);
}

/**
 * Max array number
 * @param {number[]} arr
 * @returns {number}
 */
function max(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("must be an array");
  }

  return Math.max(...arr);
}

/**
 * Min array number
 * @param {number[]} arr
 * @returns {number}
 */
function min(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("must be an array");
  }

  return Math.min(...arr);
}

console.log(min([1, "2d", 4]));

// export { sum, max, min };
