import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes.js';
import salesRoutes from './routes/salesRoutes.js';
import auth from './middleware/auth';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/products', auth, productRoutes);
app.use('/sales', auth, salesRoutes);

const port = process.env.PORT || 5000;
const server = app.listen(3000, () => {
    console.log ('Listening on port 3000');
});