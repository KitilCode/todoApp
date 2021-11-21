
async function up (queryInterface, Sequelize) {
  await queryInterface.createTable('TodoLists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      allowNull: false,
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
    userPhoneNumber: {
      type: Sequelize.STRING,
      onDelete: 'CASCADE',
      refrences: {
        model: 'User',
        key: 'phoneNumber',
        as: 'userPhoneNumber'
      }
    }
  });
};

async function down (queryInterface, Sequelize) {
  await queryInterface.dropTable('TodoLists');
}

module.exports = {
  up,
  down
}