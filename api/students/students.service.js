//Import Connnection Pool
const pool = require("../../config/database");

//export required services
module.exports = {
  createStudent: (data, callback) => {
    pool.query(
      `INSERT INTO students(first_name,last_name,address,contact_no,email,photo,status) VALUES(?,?,?,?,?,?,?)`,
      [
        data.firstName,
        data.lastName,
        data.address,
        data.contactNo,
        data.email,
        data.photo,
        1
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }

        return callback(null, results);
      }
    );
  },
  getStudentById: (id, callback) => {
    pool.query(
      `SELECT * FROM students WHERE id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }

        return callback(null, results);
      }
    );
  },
  updateStudent: (data, callback) => {
    pool.query(
      `UPDATE students SET first_name=?,last_name=?,email=?,address=?,contact_no=?,photo=?,status=? WHERE id=?`,
      [
        data.firstName,
        data.lastName,
        data.email,
        data.address,
        data.contactNo,
        data.photo,
        1,
        data.id
      ],
      (error, results, fields) => {
        if(error){
          
          return callback(error);
        }

        return callback(null, results);
      }
    );
  },
  readStudents: (callback) => {
    pool.query(
      `SELECT * FROM students WHERE status=1`,
      (error, results, fields) => {
        if(error) {
          
          return callback(error);
        }

        return callback(null, results);
      }
    )
  },
  deleteStudent: (id, callback) => {
    pool.query(
      `DELETE FROM students WHERE id=?`,
      [id],
      (error, results, fields) => {
        if(error) {
          
          return callback(error);
        }

        return callback(null, results);
      }
    )
  }
};
