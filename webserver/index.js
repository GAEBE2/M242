const app = require('express')();
const MySQLConnector = require('../persistance/MySQLConnector');

const mysql = new MySQLConnector('root', 'm242', 'modul242', 'localhost');

app.post('/temp', (req, res) => {
    res.send(mysql.getTempretatures());
});

app.post('/dezibel', (req, res) => {
    res.send(mysql.getDezibel());
});

app.listen(process.env.PORT || 3000);
