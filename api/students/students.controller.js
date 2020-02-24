const {
  createStudent,
  getStudentById,
  updateStudent,
  readStudents,
  deleteStudent
} = require("./students.service");

module.exports = {
  createStudents: (req, res) => {
    const data = req.body;
    createStudent(data, (err, results) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }

      if (!results) {
        return res.json({
          success: 0,
          message: "Table Not Found"
        });
      }

      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  getStudentById: (req, res) => {
    const id = req.params.id;
    getStudentById(id, (err, results) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: 0,
          message: "Database Error"
        });
      }

      if (!results) {
        return res.json({
          success: 0,
          message: "Table Not Found"
        });
      }

      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  updateStudent: (req, res) => {
    const data = req.body;
    updateStudent(data, (err, results) => {
      if (err) {
        console.log(err);

        return res.status(200).json({
          success: 0,
          message: "Database connection error"
        });
      }

      if (!results) {
        return res.json({
          success: 0,
          message: "Table not found"
        });
      }

      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  readStudents: (req, res) => {
    readStudents((err, results) => {
      if (err) {
        console.log(err);

        return res.status(200).json({
          success: 0,
          message: "Database Issues"
        });
      }

      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  deleteStudent: (req, res) => {
    id = req.body.id;
    deleteStudent(id, (err, results) => {
      if (err) {
        console.log(err);

        return res.status(200).json({
          success: 0,
          message: "Database Issues"
        });
      }

      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  }
};
