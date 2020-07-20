export default function regtest(pattern, text) {
  //pattern is the regular expression pattern to match against
  //text is the text with which to find the regular expression pattern
  //textCounter-the counter that points to the place in the text the engine is checking
  //patternCounter-the counter that points to the place in the regular expression patternCounter
  //being checked
  //innerCounter-the counter of the inner loop for the current place in the text being
  //checked against patternCounter
  const specialcharacters = ['?','+','*','^','$']
  let textCounter = 0
  while(textCounter < text.length){
    let patternCounter = 0
    if(text[textCounter] === pattern[0]
      || pattern[0] === '.'
      ){
      let innerCounter = textCounter
      while(patternCounter < pattern.length &&
        (pattern[patternCounter] === text[innerCounter]
          || pattern[patternCounter] === '.'
          || specialcharacters.includes(pattern[patternCounter + 1])
        )){
        if(pattern[patternCounter + 1] === '?'){
          if(pattern[patternCounter] !== text[innerCounter]){
            innerCounter -= 1
          }
          patternCounter += 1
        }
        else if(pattern[patternCounter + 1] === '*') {
            if(pattern[patternCounter] !== text[innerCounter]){
              innerCounter -= 1
            }
            else {
              while(pattern[patternCounter] === text[innerCounter + 1]){
                innerCounter += 1
              }
            }
            patternCounter += 1
        }
        else if(pattern[patternCounter + 1] === '+') {
          
            if(text[innerCounter] !== pattern[patternCounter]){
              break
            }
            else {
              while(pattern[patternCounter] === text[innerCounter + 1]){
                innerCounter += 1
              }
            }
            patternCounter += 1
        }
        else if(pattern[patternCounter] === '^'){
          if(text[textCounter - 1] || pattern[patternCounter + 1] !== text[textCounter]){
            break
          }
          else {
            patternCounter += 1
          }
        }
        
        innerCounter += 1
        patternCounter += 1
      }
      if(patternCounter >= pattern.length){
        return true
      }
    }
    textCounter += 1
  }
  return false
}
//exports.regtest = regtest;
//module.exports = regtest
