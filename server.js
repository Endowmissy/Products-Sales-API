import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//this is where our routes will be handled from
const routes = require ('./routes/routes.js')(app);

const port = process.env.PORT || 5000;
const server = app.listen(3000, () => {
    console.log ('Listening on port 3000');
})