const readline = require('readline');

function read_line(input) { //fetch file data
    const readLastLines = require('read-last-lines');
    readLastLines.read("test.txt", input)
        .then((lines) => console.log(lines));
}


const rl = readline.createInterface({  //take user input
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number of lines to print ', (input) => { //pass input to function
    if (input == "") {
        answer = 10
    }
    read_line(input) //call function with user input
    rl.close();
});