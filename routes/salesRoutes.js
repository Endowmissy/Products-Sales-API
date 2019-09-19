import express from 'express';
import sales from '../data/sales';

const salesRoutes = express.Router();


//Retrieves all sales

salesRoutes.get ('/', (req, res) => {
    res.json(sales);
});

//Retrieve a single sale by Id
salesRoutes.get ('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    sales.map((sale) => {
        if(sale.id === id) {
            res.json(sale)
        }
    });
});

//Add new sales
salesRoutes.post ('/', (req, res) => {
    const newSale = req.body;
    let sales = [];
    sales.push(newSale);
    res.json(newSale);
});

export default salesRoutes;