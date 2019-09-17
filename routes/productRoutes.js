import express from 'express';
import products from '../data/products';

const productRoutes = express.Router();

//Retrieves all product
productRoutes.get ('/', (req, res) => {
    res.json(products);
});

//Retrieve a single product by Id
productRoutes.get ('/:id', (req, res) => {
    const { id } = req.params;
    const product = products[`product${id}`];
    res.json(product);
});

//Add new product
productRoutes.post ('/', (req, res) => {
    const newProduct = req.body;
    products["product" + newProduct.id] = newProduct;
    res.json(newProduct);
});

export default productRoutes;

