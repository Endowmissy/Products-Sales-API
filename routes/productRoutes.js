import express from 'express';
import products from '../data/products';

const productRoutes = express.Router();

//Retrieves all product
productRoutes.get ('/', (req, res) => {
    res.json(products);
});

//Retrieve a single product by Id
productRoutes.get ('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    products.map((product) => {
        if(product.id === id) {
            res.json(product)
        }
    });
});
//Add new product
productRoutes.post ('/', (req, res) => {
    const newProduct = req.body;
    let products = [];
    products.push(newProduct);
    res.json(newProduct);
});

export default productRoutes;

