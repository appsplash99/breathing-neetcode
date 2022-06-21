/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 */

let containsDuplicate = function (nums) {
  const dupes = {};
  for (let i = 0; i < nums.length; i++) {
    if (dupes[nums[i]]) {
      return true;
    } else {
      dupes[nums[i]] = true;
    }
  }
  return false;
};
