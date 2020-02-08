const {color, DBHOST, DBTABLE} = require('./config'); 
let comysql = require('mysql');


let mysql = comysql.createConnection({
	host: 'localhost',
	user: 'root',
	passowrd: '',
	database: 'historial'
});

mysql.connect((err) => {
	if(err){
		console.log(err);
		return;
	}
	console.log('coneccion exitos a mysql');
});

module.exports = mysql