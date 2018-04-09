const mysql = require('mysql2');

class MySQLConnector {

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

    runQuery(query, params) {
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


    getTempretatures() {
        const query = 'SELECT * FROM measurement_temperature ORDER BY Time DESC LIMIT 1';
        return this.runQuery(query, null);
    }

    getDezibel() {
        const query = 'SELECT * FROM measurement_volume ORDER BY Time DESC LIMIT 1';
        return this.runQuery(query, null);
    }
}

module.exports = MySQLConnector;