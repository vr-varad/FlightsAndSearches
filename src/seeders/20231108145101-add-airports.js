'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name: 'Indira Gandhi International Airport',
      city_id: 16,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Safdarjung Airport',
      city_id: 16,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Chaudhary Charan Singh International Airport',
      city_id: 2,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Pune International Airport',
      city_id: 7,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Rajiv Gandhi International',
      city_id: 5,
      createdAt: new Date,
      updatedAt: new Date
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
