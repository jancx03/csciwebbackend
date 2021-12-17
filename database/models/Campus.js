const Sequelize = require('sequelize');
const db = require('../db');

const defaultImage = 'https://images.unsplash.com/photo-1583373834259-46cc92173cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'

const Campus = db.define("campus", {
  
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: defaultImage
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT,

  }

});

module.exports = Campus;

// docker run -d --name dev-postgres -e POSTGRES_PASSWORD=01001110 -e POSTGRES_USER=jancx -v ./Users/jhonnieves/Developer/Webbackend/starter-server/postgres_data -p 5432:5432 postgres