const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const ask = query => new Promise((resolve,reject) => {
    rl.question(query, answer => resolve(answer))
})

ask("Input Regular Expression Pattern")
    .then((result) => {
        console.log(result)
        return ask("Input Text")
    })
    .then(result => {
        console.log(result)
        rl.close()
    })
    .catch(error => console.log(error))
/*
rl.question("Input Regular Expression Pattern ", answer => {
    console.log(`Your answer is ${answer}`)
    
}).then(() => {
    rl.question("Enter Text", answer => {
        console.log(answer)
    })
})
*/


function test(pattern,text){
    let i = 0
    let j = 0
    for(let i = 0;i < text.length;i++){
        if(text.charAt[i] === pattern[0]){
            
        }
    }
    return false
}