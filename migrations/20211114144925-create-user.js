// wju don't these need to be imported???
// const { queryInterface, Sequelize} = require('sequelize');


async function up (queryInterface, Sequelize) {
  await queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: false,
      type: Sequelize.INTEGER
    },
    firstName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  });
};

async function down (queryInterface) {
  await queryInterface.dropTable('Users');
}

module.exports = {
  up,
  down
}
