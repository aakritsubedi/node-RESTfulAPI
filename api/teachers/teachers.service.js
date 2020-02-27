//Import the Teacher Model
const Teacher = require("./teachers.model");

module.exports = {
  createTeacher: (teacher) => {
    return new Teacher({
      name: teacher.name,
      email: teacher.email,
      password: teacher.password,
      age: teacher.age,
      status: 1
    }).save();
  },
  getAllTeachers: () => {
    return Teacher.fetchAll();
  },
  updateTeacher: (id, teacher) => {
    return new Teacher({ id }).save({
      name: teacher.name,
      email: teacher.email,
      password: teacher.password,
      age: teacher.age
    });
  },
  deleteTeacher: (id) => {
    return new Teacher({ id }).fetch().then( teacher => teacher.destroy());
  },
  getTeacherById: (id) => {
    return Teacher.where({ id })
      .fetch()
      .then(teacher => teacher)
      .catch(Teacher.NotFoundError, () => {
        throw "Teacher Not Found";
      });
  }
};
