export default function test(pattern, text) {
  let i = 0;
  while (i < text.length) {
    if (text.charAt(i) === pattern[0] || pattern[0] === '.') {
      let j = 1
      let k = i + j
      while (j < pattern.length && 
            (pattern[j] === text.charAt(k) || 
            pattern[j] === '.' ||
            pattern[j + 1] === '?')) {
            if(pattern[j + 1] === '?'){
              if(pattern[j] === text.charAt(k)){
                j += 1
              }
              else {
                
              }
            }
        
            j += 1
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
//exports.test = test;
