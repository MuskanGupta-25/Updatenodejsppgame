const readline = require('readline');
const fs = require('fs');
const http = require('http');

const html = fs.readFileSync('./template/index.html' , 'utf-8');
const end = fs.readFileSync('./template/end.html' , 'utf-8');

//step1: create a server
const server = http.createServer((request,response)=>{
    let path = request.url;
    //response.end(path)

    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        //response.end('You are in home page');
        response.end(html);
        //response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
    } else if(path.toLocaleLowerCase() === '/end'){
        response.end(end)
    }else {
        //response.end(html.replace('{{%CONTENT%}}', 'Error 404: page not found!'));
        response.end('Error 404: page not found!')
    }
});

//step2: start a server
server.listen(8000, '127.0.0.1' , ()=>{
    console.log('Server had started');
})