//Import Teacher Service
const teacherService = require("./teachers.service");

const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
  fetchAll: (req, res, next) => {
    teacherService
      .getAllTeachers()
      .then(data => {
        res.status(200).json({
          success: 1,
          message: "Available Teachers",
          data: data
        });
      })
      .catch(err => next(err));
  },
  create: (req, res, next) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    teacherService
      .createTeacher(body)
      .then(data =>
        res.status(200).json({
          success: 1,
          message: "Teacher added successfully",
          data: data
        })
      )
      .catch(err => next(err));
  },
  update: (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    teacherService
      .updateTeacher(id, body)
      .then(data => {
        res.status(200).json({
          success: 1,
          message: "Teacher with given id has been updated.",
          data: data
        });
      })
      .catch(err => next(err));
  },
  remove: (req, res, next) => {
    const id = req.params.id;
    teacherService
      .deleteTeacher(id)
      .then(data => {
        res.status(200).json({
          success: 1,
          message: "The user with id given id has been deleted.",
          data: data
        });
      })
      .catch(err => next(err));
  },
  fetchById: (req, res, next) => {
    const id = req.params.id;
    teacherService.getTeacherById(id).then(data => {
      res.status(200).json({
        success: 1,
        message: "The record of the teacher is",
        data: data
      })
    })
  }
};
