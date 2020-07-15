import readline from 'readline'
import  test from './regtest.js'
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

