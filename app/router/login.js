let express = require('express');
let app = express();
let {r} = require('../config/config');
let mysql = require('../config/conexion');

app.post('/', (req, res)=>{
	let password = req.body.password;
	let email = req.body.email;
	mysql.query('SELECT *  FROM admin WHERE email=? AND password=?', [email, password], (err, resp) =>{
		if(err){
			return r._400(res, {err});
		}
		console.log(resp.length);
		if(resp.length == 0){
			return r._400(res, {Message: "sus credemciales son incorrectas"});
		}
			return r._200(res, {login: true, data: resp});

	})	
});
	

module.exports = app;