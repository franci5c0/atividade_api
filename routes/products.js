const express = require('express'); //importa o framework express
const router = express.Router(); //cria um novo roteado
const productsController = require('../controllers/productsController'); //importa o controlador de transações

//definindo uma rota para obter todas as transações 
router.get('/',productsController.getAllProducts);

//definindo uma rota para adicionar uma nova transação
router.post('/',productsController.addProducts);

//definindo uma rota para atualizar uma transação existente(substituição completa)
//router.put('/:id', productsController.updateProductsPut);

//definindo uma rota para atualizar uma transação existente(substituição parcial)
//router.patch('/:id', productsController.updateProductsPatch);

//define uma rota para deletar uma transação)
//router.delete('/:id', productsController.deleteProducts);

//exportando o roteador
module.exports=router;
