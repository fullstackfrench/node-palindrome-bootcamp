const http = require('http');
const fs = require('fs');
const  url = require('url');
const querystring = require('querystring');

const server = http.createServer(function(req, res){
      const urlParts = url.parse(req.url);
      const pathName = urlParts.pathname;
      const params = querystring.parse(urlParts.query);
      

      if(pathName == '/') {

        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();

          console.log(1, pathName);

          
          
      });
    } else if (pathName =='/api') {
      
      if ('word' in params) {
            
        console.log(2, pathName);
        
        const reversedWord = params['word'].split("").reverse().join("")
        const result = params['word'] == reversedWord
        console.log(reversedWord)
        
        const objToJson = {
          result
        }
          
        console.log(objToJson)
        res.end(JSON.stringify(objToJson));
      }
      
    } else if (pathName == '/css/style.css'){
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
    }  else if (pathName == '/js/main.js'){
      fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
    }

})

server.listen(2121);

