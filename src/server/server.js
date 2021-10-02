let express = require('express')
let app = express()
let cors = require('cors') 
/* const fs = require('fs');
let path = require('path') */
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.all('/:controller/:acao', async function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    let msg;
    //if (fs.existsSync('./controller/' + req.params.controller + 'Controller.js')) {
    let controller = require('./controller/' + req.params.controller + 'Controller')
    if (typeof controller[req.params.acao] === "function") {
        msg = await controller[req.params.acao](req.body);

    } else {
        msg = 'função não existe'
        res.status(500).send(msg);
    }
    // } else {
    //msg = 'Controller não existe' + path.join(__dirname, '../bd/ordem_servico.db');
    //}


    res.json(msg)
    /* cliente.getPosts().then(function(response){
        console.log(response)
    }); */
})

app.listen(3000, function () {

})