/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
  Input: number[] - nums
  Output: number[] - answer
  Condition: O(n), cannot use Division operator
*/

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

const productExceptSelf = (nums) => {
  let result = [];

  let product = 1;
  for (let i=0; i<nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  };

  product = 1;
  for (let j=nums.length-1; j>=0; j-- ) {
    result[j] *= product;
    product *= nums[j];
  };

  return result;
};

productExceptSelf([1,2,3,4])