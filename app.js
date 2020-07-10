const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const ask = query => new Promise((resolve,reject) => {
  rl.question(query, answer => resolve(answer))
})

let [pattern, text ] = ['','']

ask("Input Regular Expression Pattern\n")
  .then(result => { 
      pattern = result
      return ask("Input Text to Match Against Pattern\n")
    })
   .then(text => {
       rl.close()
       console.log(test(pattern, text))
   })
  .catch(error => console.log(error))

function test(pattern,text){
    let i = 0
    while(i < text.length) {
        if(text.charAt(i) === pattern[0]){
            let j = 1
            while(j < pattern.length && pattern[j] === text.charAt(i + j)){
                j += 1
            }
            if(j === pattern.length){
                return true
            }
        }
        i += 1
    }
    return false
}