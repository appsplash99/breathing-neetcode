/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 */

/**
 * Time Complexity - O(n)
 * Space complexity - O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function (nums, target) {
  const numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = numsObj[target - nums[i]];
    if (diff !== undefined) {
      return diff > i ? [i, diff] : [diff, i];
    }
    numsObj[nums[i]] = i;
  }
};

/** --------- */

const TEST_CASES = [
  { nums: [2, 7, 11, 15], target: 9, op: [0, 1] },
  { nums: [3, 2, 4], target: 6, op: [1, 2] },
  { nums: [3, 3], target: 6, op: [0, 1] },
  { nums: [1, 3, 4, 2], target: 6, op: [2, 3] },
];

TEST_CASES.forEach((test) => {
  console.log(test.op, twoSum(test.nums, test.target));
});
