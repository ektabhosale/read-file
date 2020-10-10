var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);

function read_line(input){
    // let input=3
    const readLastLines = require('read-last-lines');
    readLastLines.read("test.txt", input)
        .then((lines) => console.log(lines));
    }
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question('Enter number of lines to print ', (input) => {
      if(input==""){
          answer=10
      }
    read_line(input)
      rl.close();
    });