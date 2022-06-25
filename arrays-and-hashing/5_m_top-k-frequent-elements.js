/**
 * Medium
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 */

/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
let topKFrequent = function (numbers, k) {
  let map = new Map(); // { num1 => freq1, num2 => freq2 }

  for (let num of numbers) map.set(num, (map.get(num) || 0) + 1);

  let bucket = new Array(numbers.length + 1); // [ <1 empty item>, [ 3 ], [ 2 ], [ 1 ], <3 empty items> ]
  for (let [num, freq] of map.entries()) {
    bucket[freq] ? bucket[freq].push(num) : (bucket[freq] = [num]);
  }

  let result = [];
  //looping in reverse order
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      for (let num of bucket[i]) {
        result.push(num);
        if (result.length === k) return result;
      }
    }
  }
};

/**------- */

[
  { numbers: [1, 1, 1, 2, 2, 3], k: 2, op: [1, 2] },
  { numbers: [1], k: 1, op: [1] },
].forEach((test) => console.log(topKFrequent(test.numbers, test.k)));
