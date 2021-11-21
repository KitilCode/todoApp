async function up (queryInterface, Sequelize) {
  await queryInterface.createTable('TodoItems', {
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
    complete: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    todoListId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      refrences: {
        model: 'TodoList',
        key: 'id',
        as: 'todoListId'
      }
    }
  });
};

async function down (queryInterface) {
  await queryInterface.dropTable('TodoItems');
}

module.exports = {
  up,
  down
}