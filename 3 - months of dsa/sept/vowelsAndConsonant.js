/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  /*
        create obj map loop over string and store frequency

        [a, e, i, o, u]

        map for over object key and find maximun frq of vowels and Consonant 

    */

  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      ++map[s[i]];
    }
  }

  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowels = 0;
  let maxConsonant = 0;

  let mapkeys = Object.keys(map);

  for (let i = 0; i < mapkeys.length; i++) {
    if (vowels.includes(mapkeys[i])) {
      if (maxVowels < map[mapkeys[i]]) {
        maxVowels = map[mapkeys[i]];
      }
    } else if (maxConsonant < map[mapkeys[i]]) {
      maxConsonant = map[mapkeys[i]];
    }
  }

  return maxVowels + maxConsonant;
};
