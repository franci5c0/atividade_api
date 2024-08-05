const db = require('../config/db'); //importa a conexão com o banco de dados


//função para obter todas as transações
const getAllProducts = (req, res) => {
db.query('SELECT * FROM products', (err, results) => {
if (err) {
console.error('erro ao obter transações', err);
res.status(500).send('erro ao obter transações');
return;
}
res.json(results);
});
};



//função para adicionar uma nova transação
const addProducts = (req, res) => {
    const {name, description, category, price, stock, expiry_date} = req.body;
    db.query(
        'INSERT INTO products (name, description, category, price, stock, expiry_date) VALUES (?,?,?,?,?,?,)',
        [name, description, category, price, stock, expiry_date],
        (err,results) => {
            if(err) {
                console.error('erro ao adicionar transação', err);
                res.status(500).send('Erro ao adicionar transação');
                return;
            }

            res.status(201).send('transação adicionada com sucesso');
        }
    );
};


























module.exports = {
getAllProducts,
addProducts
};
