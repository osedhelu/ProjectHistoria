const r = {
    _200 : (res, array) =>{
        res.status(200).json(array);
    },
    _500 : (res, array) =>{
        res.status(500).json(array);
    
    },
    _201 : (res, array) =>{
        res.status(201).json(array);
    },
    _400 : (res, array) =>{
        res.status(400).json(array);
    },
    _401 : (res, array) =>{
        res.status(401).json(array);
    },
}

let color = {
    black: "\x1b[30m%s\x1b[0m",
    danger: "\x1b[31m%s\x1b[0m",
    success: "\x1b[32m%s\x1b[0m",
    yellow: "\x1b[33m%s\x1b[0m",
    blue: "\x1b[34m%s\x1b[0m",
    purple: "\x1b[35m%s\x1b[0m",
    primary: "\x1b[36m%s\x1b[0m"
}


/*Variable de Entornos
  |                    */

const SEED = '@este-es-un-token-super-dificil@de-desifrar';
const DBHOST = '127.0.0.1:27017';
const DBTABLE = 'Ventas_OsEdHeLu'
const PORT = 3000;
/*|
Variable de Entornos*/


module.exports = {r, color, SEED, DBHOST, DBTABLE, PORT}