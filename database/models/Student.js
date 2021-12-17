const Sequelize = require('sequelize');
const db = require('../db');

const defaultImage = 'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email:{
    type: Sequelize.STRING,
    allowNull: false
    
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: defaultImage
  },
  gpa:{
    type: Sequelize.DECIMAL,
  }

});


module.exports = Student;


// https://drive.google.com/file/d/1uuGYZ-ag-NXMTLt1yp63mIdsGp_mYAWJ/view