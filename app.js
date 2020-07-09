const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const pattern = rl.question("Input Regular Expression Pattern ", answer => {
    console.log(`Your answer is ${answer}`)
})

console.log(pattern)

function test(pattern,text){
    let i = 0
    let j = 0
    for(let i = 0;i < text.length;i++){
        if(text.charAt[i] === pattern[0]){
            
        }
    }
    return false
}