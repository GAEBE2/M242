const mysql = require('mysql2');

export default class MySQLConnector {

    private userName;
    private password;
    private serverAdr;
    private database;

    private connection;

    constructor(userName, password, serverAdr, database) {
        this.userName = userName;
        this.password = password;
        this.database = database;
        this.serverAdr = serverAdr;
        this.connect();
    }

    connect() {
        this.connection = mysql.createConnection({
            host: this.serverAdr,
            user: this.userName,
            database: this.database,
            password: this.password
        });
    }

    private runQuery(query, params) {
        let results;
        this.connection.query(query, params, (err, resultRows) => {
            if (err) {
                throw err;
            } else {
                results = resultRows;
            }
        });
        return results;
    }

    public getTempretatures() {
        const query = 'SELECT * FROM temperature ORDER BY DAT DESC LIMIT 1';
        return this.runQuery(query, null);
    }

    public getDezibel() {
        const query = 'SELECT * FROM dezibel ORDER BY DAT DESC LIMIT 1';
        return this.runQuery(query, null);
    }
}