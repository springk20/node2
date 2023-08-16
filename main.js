const mysql = require('mysql');

const connection = mysql.createConnection({
    host :  'database-1.cafbqq6ifdlx.ap-northeast-2.rds.amazonaws.com',
    user : 'admin',
    password : '11111111',
    database : 'dadok',
    port : '3306',
});



//RDS에 접속
connection.connect(function(err){
    if(err){
        throw err;        
    }else{

        // connection.query("create database dadok", function(err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!         
        // });

        // connection.query("show databases", function(err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!
        //  });
        // console.log('연결완료')

        // connection.query("use dadok", function(err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!         
        // });

        // connection.query('create table booklist (number INT not null auto_increment primary key, date varchar(5) not null, title varchar(100) not null, author varchar(100) not null);', (error, results, fields)=>{
        //     if(error) throw error;
        //     console.log(results);
        // });

        // connection.query('insert into booklist (date, title, author) values(\'1월\',\'마리오네트의 춤\',\'이금이\'),(\'2월\',\'어션테일즈\',\'이작\');',(error, cdresults, fields)=>{
        //     if(error) throw error;
        //     console.log("데이터 입력 성공!");
        // })
        // connection.query("select * from booklist", function(err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!         
        // });

        // connection.query('create table passagelist (number INT not null auto_increment primary key, memo varchar(10000) not null);', (error, results, fields)=>{
        //     if(error) throw error;
        //     console.log("table생성 완료!");
        // });

        //  connection.query('create table booklist21 (number INT not null auto_increment primary key, date varchar(5) not null, title varchar(100) not null, author varchar(100) not null);', (error, results, fields)=>{
        //     if(error) throw error;
        //     console.log(results);
        // });
        
        // connection.query('create table booklist22 (number INT not null auto_increment primary key, date varchar(5) not null, title varchar(100) not null, author varchar(100) not null);', (error, results, fields)=>{
        //     if(error) throw error;
        //     console.log(results);
        // });

        // connection.query('insert into booklist21 (date, title, author) values(\'1월\',\'멸망의 정원\',\'쓰네가와 코타로\'), (\'2월\',\'우리가 빛의 속도로 갈 수 없다면\',\'김초엽\'), (\'2월\',\'0시를 향하여\',\'애거서 크리스티\'), (\'3월\',\'블랙 쇼맨과 이름 없는 마을의 살인\',\'히가시노 게이고\'), (\'6월\',\'데미안 \',\'헤르만헤세\'), (\'9월\',\'고도일보 송가을인데요\',\'송경화\'), (\'5월\',\'힙하게 잇다 조선 판소리\',\'김희재\');',(error, cdresults, fields)=>{
        //     if(error) throw error;
        //     console.log("데이터 입력 성공!");
        // })

        // connection.query('insert into booklist22 (date, title, author) values(\'1월\',\'청두, 혼자에게 다정한 봄빛의 도시에서\',\'이소정\'), (\'2월\',\'이런 얘기하지 말까?\',\'최지은\'), (\'4월\',\'다정한 것이 살아남는다\',\'브라이언 헤어\'), (\'5월\',\'명량해녀\',\'김은주\'), (\'5월\',\'어션테일즈1-2 \',\'아작\'), (\'5월\',\'그날, 그곳에서\',\'이경희\'), (\'5월\',\'힙하게 잇다 조선 판소리\',\'김희재\');',(error, cdresults, fields)=>{
        //     if(error) throw error;
        //     console.log("데이터 입력 성공!");
        // })

        
    }
});