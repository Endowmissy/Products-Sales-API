import express from 'express';
import bodyParser from 'body-parser';
import sales from '../data/sales';

const salesRoutes = express.Router();


//Retrieves all sales

salesRoutes.get ('/', (req, res) => {
    res.json(sales);
});

//Retrieve a single sale by Id
salesRoutes.get ('/:id', (req, res) => {
    const { id } = req.params;
    const sale = sales[`sale${id}`];
    res.json(sale);
});

//Add new sales
salesRoutes.post ('/', (req, res) => {
    const newSale = req.body;
    sales["sale" + newSale.id] = newSale;
    res.json(newSale);
});

export default salesRoutes;