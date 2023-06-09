'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      google_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM(['admin', 'user']),
        defaultValue: 'user'
      },
      otp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      expiration_time:{
        type: Sequelize.DATE,
        allowNull: true,
      },
      verified:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};