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

        return callback(null, results);  
      }
    );
  },
  read: (callback) => {
    pool.query(
      `SELECT * FROM user WHERE status = 1`,
      (error, results, fields) => {
        if(error){

          return callback(error);
        }

        return callback(null, results);
      }
    )
  },
  update: (data,callback) => {
    pool.query(
      'UPDATE user SET name = ?, email = ?, password = ?, status = ? WHERE id= ?',
      [data.name, data.email, data.password, data.status,data.id],
      (error, results, fields) => {
        if (error) {

          return callback(error);
        }

        if(!results){

          return res.json({
            success: 0,
            message: 'Unable to update data with user id'.data.id
          })
        }
        return callback(null, results);  
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `DELETE from user where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
