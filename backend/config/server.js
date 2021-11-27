let express = require('express');

let app = express();
let port = process.env.PORT || 3003;

// app.set("view engine", "ejs");
// app.set('views', './app/views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port,function(){
    console.log('Servidor express rodando na porta: ', port);
})

module.exports = app;