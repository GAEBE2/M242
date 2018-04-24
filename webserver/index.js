const app = require('express')();
const MySQLConnector = require('../persistance/MySQLConnector');

const mysql = new MySQLConnector('root', 'm242', 'modul242', 'localhost');

app.post('/temp', (req, res) => {
    const results = mysql.getTempretatures();
    res.send(results);
});

app.post('/dezibel', (req, res) => {
    const results = mysql.getDezibel();
    console.log(results);
    res.send(results);
});

app.post('/button', (req, res) => {
    const results = mysql.getButton();
    res.send(results);
});

app.post('/light', (req, res) => {
    const results = mysql.getLight();
    res.send(results);
});

app.listen(process.env.PORT || 3000);
console.log('Serving on Port 3000');
