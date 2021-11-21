async function up (queryInterface,Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'First',
      lastName: 'Last',
      // phone number must be in this format
      // '+<country_code><area_code><phonenumber>'
      phoneNumber: '+10000000000',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  }
  
  async function down (queryInterface,Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
  
  module.exports = {
    up,
    down
  };