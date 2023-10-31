const express = require('express');
const routerPersonas = require('./routes/personas');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


app.use(bodyParser.json());



mongoose.connect('mongodb://127.0.0.1:27017/proyectojsdelfina', 
{
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    
}

)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error al conectarse a la base de datos'));

db.once('open', () => {
    console.log('Conectado a la base de datos');
})



app.use("/personas", routerPersonas);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})