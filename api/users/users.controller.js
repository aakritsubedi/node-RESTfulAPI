const { create,read,update,deleteUser} = require("./users.service");
const { genSaltSync, hashSync} = require('bcrypt');

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: 0,
          message: 'Database Connection Error'
        })
      }

      return res.status(200).json({
        success: 1,
        data: results
      })
    });
  },
  readUsers: (req, res) => {
    read((err,results)=>{
      if(err){
        console.log(err);

        return res.status(500).json({
          success: 0,
          message: 'Database Connection Error'
        })
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }

      return res.status(200).json({
        success: 1,
        data: results
      })
    })
  },
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    update(body, (err, results) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: 0,
          message: 'Database Connection Error'
        })
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }

      return res.status(200).json({
        success: 1,
        data: results
      })
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully"
      });
    });
  }
};
