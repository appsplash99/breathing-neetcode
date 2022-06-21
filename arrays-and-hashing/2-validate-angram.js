/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const allLettersCount = {};

  // populate above object with letters' count from string s
  for (let i = 0; i < s.length; i++) {
    if (allLettersCount[s[i]]) {
      allLettersCount[s[i]]++;
    } else {
      allLettersCount[s[i]] = 1;
    }
  }

  // confirm whether all letters from string s are being used or not
  for (let j = 0; j < t.length; j++) {
    if (allLettersCount[t[j]]) {
      // if letter is present - reduce its count
      allLettersCount[t[j]]--;
    } else {
      /**
       * if letter not present or
       * is used more than its occurences in string s
       */
      return false;
    }
  }

  return true;
};

// ----------------

const TEST_CASES = [
  { s: "anagram", t: "nagaram", result: true },
  { s: "cat", t: "car", result: false },
  { s: "a", t: "ab", result: false },
  { s: "aa", t: "a", result: false },
  { s: "aacc", t: "ccac", result: false },
];

TEST_CASES.forEach((test, i) => {
  console.log(`result #${i + 1} - `, test.result === isAnagram(test.s, test.t));
});
