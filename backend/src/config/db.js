const mysql = require("mysql2");

const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "crud"
});

conexao.connect((erro) => { 
    if (erro) { console.error("Erro ao conectar no banco de dados:", erro); 
return;}

    console.log("Conectado ao banco de dados com sucesso!");
});

module.exports = conexao;
