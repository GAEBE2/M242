const express = require('express')();
import MySQLConnector from '../persistance/MySQLConnector';

const mysql = new MySQLConnector('root', '', 'modul242', 'localhost');

express.post('/temp', (req, res) => {
    res.send(mysql.getTempretatures());
});

express.post('/dezibel', (req, res) => {
    res.send(mysql.getDezibel());
});