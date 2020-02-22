const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `INSERT INTO user(name,email,password,status) VALUES(?,?,?,?)`,
      [data.name, data.email, data.password, data.status],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }

        return callback(null, results)  
      }
    );
  }
};
