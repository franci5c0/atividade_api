//importar as bibliotecas 
const dotenv = require('dotenv');  // Importa o pacote dotenv para gerenciar variáveis de ambiente 

//configurar as variáveis de ambiente 
dotenv.config(); // Carrega as variáveis definidas no arquivo .env para process.env

//importar as bibliotecas
const express = require('express'); // Importa o framework Express 
const cors = require('cors');  // Importa o pacote cors para permi r requisições de diferentes origens 
const bodyParser = require('body-parser');  // Importa o pacote body-parser para analisar o corpo das requisições HTTP

const db = require('./config/db'); //importa a conexão com o banco de dados

const productsRoutes = require('./routes/products'); //importa as rotas de transações


//Inicializa uma nova aplicação Express
const aplication = express();  // Inicializa uma nova aplicação Express 


//Configura o CORS e o body-parser
aplication.use(cors()); //habilita o CORS para todas as rotas
aplication.use(bodyParser.json()); //configura o body-parser para analisar requisições JSON


//usa as rotas de transações para todas as requisições que começam com /api/products
aplication.use('/api/products', productsRoutes);


//Rota inicial para testar o servidor 
aplication.get('/',(req, res) => {
res.send('o servidor tá aberto, meu nobre'); //define uma rota inicial para testar o servidor
});


// Configura o servidor para escutar em uma porta específica
const PORT = process.envPORT || 3000; //define a porta a partir da variável ambiente ou usa a porta 3000 como padrão

aplication.listen(PORT,() => {
console.log(`o servidor tá rodando na porta ${PORT}`); 
}); //escreve uma mensagem informando que o servidor está rodando


