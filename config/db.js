//importar a biblioteca mysql2 e criar a conexão com o Banco de Dados 
const mysql = require('mysql2') //importa o pacote mysql2 para conectar ao banco de dados


// Exibe as variáveis de ambiente carregadas
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER); 
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);
//depois pode apagar ou comentar

const db = mysql.createConnection({
    host: process.env.DB_HOST, //endereço do servidor de banco de dados
    user: process.env.DB_USER, //nome de usuário para acessar o banco de dados
    password: process.env.DB_PASS, //senha do usuário para acessar o banco de dados
    database: process.env.DB_NAME //nome do banco de dados a ser acessado
})


db.connect((err) => {

if (err){
console.error('erro ao conectar com o database:', err); //exibe mensagem de erro
return;
}
console.log('conectado ao database mysql'); //exibe mensagem de sucesso
});

module.exports = db; //exporta a conexão para ser usada em outros arquivos
