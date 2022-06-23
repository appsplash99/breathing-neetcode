/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 */

/** NOTES
 * 1. equating sorted letters of an anagram are always equal.
 *    ex: "tan", "nat" -> when sorted gives -> "ant", "ant"
 *
 * 2. convert ascii to number:
 *    "a".charCodeAt(0) // output 97
 *    "b".charCodeAt(0) // output 98
 */

/**
 * Time Complexity -> O(m * n)
 *  where:  m = total number of words, n = total letters in a string
 *
 * Space Complexity: O(n)
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
  const hashMap = {};
  strs.forEach((word, index) => {
    let key = 0;
    for (const letter of word) {
      // console.log(letter);
      key += letter.charCodeAt(0) - "a".charCodeAt(0); // convert string alphabet to ascii number
    }
    if (hashMap[key]) {
      hashMap[key].push(word);
    } else {
      hashMap[key] = [word];
    }
  });

  return Object.values(hashMap);
};

/** ------- TEST CASES */
const TEST_CASES = [
  {
    strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
    op: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
  },
  { strs: [""], op: [[""]] },
  { strs: ["a"], op: [["a"]] },
];

TEST_CASES.forEach((test) => console.log(groupAnagrams(test.strs)));
