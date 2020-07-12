function test(pattern, text) {
  let i = 0;
  while (i < text.length) {
    if (text.charAt(i) === pattern[0] || pattern[0] === '.') {
      let j = 1;
      while (j < pattern.length && (pattern[j] === text.charAt(i + j) || pattern[j] === '.')) {
        j += 1;
        if (i + j > text.length) {
          return false;
        }
      }
      if (j === pattern.length) {
        return true;
      }
    }
    i += 1;
  }
  return false;
}
exports.test = test;
