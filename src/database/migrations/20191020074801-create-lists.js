module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lists', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      quantity_items: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      price_total: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('lists');
  },
};
