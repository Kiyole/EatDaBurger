const connection = require("./connection");

let orm = {
    selectAll:function(tableName, cb){
        connection.query("SELECT * FROM " + tableName + ";", function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne:function(tableName, userInput, cb){
        let query = connection.query("INSERT INTO " + tableName + " SET ?", 
        [userInput], function(err, result){
            if (err) throw err;
            console.log(query.sql);
            console.log(result)
            cb(result)
        });
    },
    updateOne:function(tableName, userInput, condition, cb){
        let query = connection.query("UPDATE " + tableName + " SET ? WHERE ?",
        [userInput, condition], function(err, result){
            if (err) throw err;
            console.log(query.sql);
            cb(result)
        });
    }
};

module.exports = orm;