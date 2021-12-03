const express = require('express');
const cors = require("cors");

let app = express();
let port = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(port,function(){
    console.log('Servidor express rodando na porta: ', port);
})

module.exports = app;