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
        'INSERT INTO products (name, description, category, price, stock, expiry_date) VALUES (?,?,?,?,?,?)',
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


//função para atualizar uma transação existente (substituição completa)
const updateProductsPut = (req, res) => {
    const{id} = req.params;
    const {name, description, category, price, stock, expiry_date} = req.body;
    db.query(
    'UPDATE Products SET name=?, description=?, category=?, price=?, stock=?, expiry_date=? WHERE id=?',
    [name, description, category, price, stock, expiry_date, id],
    (err, results) => {
        if(err) {
            console.error('erro ao atualizar transação', err);
            res.status(500).send('erro ao adicionar transação');
            return;
    }
    res.send('transação atualizada com sucesso');
    }
    );
    };


    //função para atualizar uma transação existente (atualização parcial)
    const updateProductsPatch = (req, res) => {
    const {id} = req.params;
    const fields = req.body;
    const query = [];
    const values = [];

    for (const [key,value] of Object.entries(fields)){
    query.push(`${key} = ?`);
    values.push(value);
    }
    values.push(id);
    db.query(
        `UPDATE products SET ${query.join(',')} WHERE id = ?`,
        values,
        (err, results) => {
if (err) {
    console.error('Erro ao atualizar o produto:', err);
    res.status(500).send('Erro ao atualizar o produto');
    return;
}
res.send('Produto atualizado com sucesso');
            }
        );
    };











module.exports = {
getAllProducts,
addProducts,
updateProductsPut,
updateProductsPatch
};
