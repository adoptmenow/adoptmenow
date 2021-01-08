'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addColumn ("Pets", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: {tableName: 'Users'},
        key: "id"
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },
  
  down:  (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Pets', 'userId')
    
  }
};