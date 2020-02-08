let express = require('express');
let app = express();
let {r} = require('../config/config');
let mysql = require('../config/conexion');

let schemaArticle = require('../models/schema-articles');
// -------------------------------------------------------

app.get('/', (req, res) =>{
	mysql.query('SELECT * FROM users', (err, resp) =>{
		if(err){
			r._400(res, {error: 'esta petision no es valida',err});
		}
		return r._200(res,{Estuden: resp});

	});
});


app.post('/', (req, res) =>{
	let data = req.body;
	mysql.query('INSERT INTO users set ?', [data], (err, resp)=>{
		if(err){
			return r._400(res,{err});
		}

	return r._200(res, {data: resp});
			
	});
})

app.get('/:id', (req, res) => {
	let id = req.params.id;
	let body = req.body;
	return mysql.query('SELECT * FROM users WHERE id = ?', [id], (err, userData) =>{
		let user = userData[0];
		if(err){
			return r._400('este usuario no existe');
		}
		return r._200(res, {data: userData});
	})
});

app.put('/:id', (req, res)=>{
let body = req.body;
let id = req.params.id;
	mysql.query('UPDATE users set ? WHERE id = ?', [body, id], (updateErr,resp) =>{
			if(updateErr){
				return r._400(res, {err: updateErr});
			}

			return r._200(res, {resp});
		})
})

app.delete('/:id', (req,res) =>{
	let id = req.params.id;
	mysql.query('DELETE FROM users WHERE id = ?', [id], (err, resp) => {
		if(err){
			return r._401(res, {err});
		}
		return r._200(res, {message: "usuario eliminado", resp});
	});
})
module.exports = app;