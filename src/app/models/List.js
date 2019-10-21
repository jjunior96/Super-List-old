import Sequelize, { Model } from 'sequelize';

class List extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        quantity_items: Sequelize.INTEGER,
        price_total: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default List;
