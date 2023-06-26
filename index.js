// const mysql = require('mysql');
const express = require('express');
const fs= require('fs');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const connection = require('./lib/db');

const app = express();

// const connection = mysql.createConnection({
//     host :  'database-1.cafbqq6ifdlx.ap-northeast-2.rds.amazonaws.com',
//     user : 'admin',
//     password : '11111111',
//     database : 'dadok',
//     port : '3306',
// });

app.use(bodyparser.urlencoded({
    extended: false,
}));
app.use(express.static(`${__dirname}/public`));


// connection.connect();

// connection.query('create table booklist (number INT not null auto_increment primary key, date varchar(5) not null, title varchar(100) not null, author varchar(100) not null);', (error, results, fields)=>{
//     if(error) throw error;
//     console.log("table생성 완료!");
// });


// connection.end();

// connection.query('insert into booklist (date, title, author) values(\'1월\',\'마리오네트의 춤\',\'이금이\');',(error, cdresults, fields)=>{
//     if(error) throw error;
//     console.log("데이터 입력 성공!");
// })

app.get('/', (request, response)=>{
    fs.readFile('public/list.html', 'utf-8', (error, data)=>{
        connection.query('select * from booklist',(error, results, fields)=>{
            if(error) throw error;
            response.send(ejs.render(data, {
                data:results,
            }));
        });        
    });
});




app.get('/create',(request, response)=>{
    fs.readFile('public/addlist.html', 'utf-8', (error, data)=>{
        if(error) throw error;
        response.send(data);      
    });
});
app.post('/create', (request, response) => {
    const body = request.body;
    connection.query('insert into booklist (date, title, author) VALUE (?, ?, ?)',
    [body.date, body.title, body.author], () => {
        response.redirect('/');
    });
});




app.get('/modify/:id', (request, response) => {
    fs.readFile('public/modifylist.html', 'utf-8', (error, data) => {
      connection.query('select * from booklist WHERE number =?', [request.params.id], (error, results) => {
        if (error) throw error;
        console.log(request.params.id);
        response.send(ejs.render(data, {
          data: results[0],
        }));
      });
    });
});
app.post('/modify/:id', (request, response) => {
    const body = request.body;
    connection.query('update booklist set date=?, title=?, author=? where number= ?',
    [body.date, body.title, body.author, request.params.id], (error, results) => {
        if (error) throw error;
        response.redirect('/');
    });
});



app.get('/passage', (request, response)=>{
    fs.readFile('public/passage.html', 'utf-8', (error, data)=>{
        connection.query('select * from passagelist',(error, results, fields)=>{
            if(error) throw error;
            response.send(ejs.render(data, {
                data:results,
            }));
        });        
    });
});

app.get('/passage',(request, response)=>{
    fs.readFile('public/passage.html', 'utf-8', (error, data)=>{
        if(error) throw error;
        response.send(data);      
    });
});
app.post('/passage', (request, response) => {
    const body = request.body;
    connection.query('insert into passagelist (memo) VALUE (?)',
    [body.memo], () => {
        response.redirect('/passage');
    });
});



/*passage 수정 */

// app.get('/passage/:id', (request, response) => {
//     fs.readFile('public/passagelist.html', 'utf-8', (error, data) => {
//       connection.query('select * from passagelist WHERE number =?', [request.params.id], (error, results) => {
//         if (error) throw error;
//         console.log(request.params.id);
//         response.send(ejs.render(data, {
//           data: results[0],
//         }));
//       });
//     });
// });
// app.post('/passage/:id', (request, response) => {
//     const body = request.body;
//     connection.query('update passage set memo=? where number= ?',
//     [body.memo, request.params.id], (error, results) => {
//         if (error) throw error;
//         response.redirect('/passage');
//     });
// });



app.get('/delete/:id', (request, response) => {
    const body = request.body;
    connection.query('delete from passagelist where number= ?',
    [request.params.id], () => {
        response.redirect('/passage');
    });
  });


app.listen(3000, ()=>{
    console.log('Server is running port 3000!');
    // connection.connect();
});