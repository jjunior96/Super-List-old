import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
        unit: Sequelize.STRING,
        price: Sequelize.FLOAT,
        category: Sequelize.STRING,
        cart: Sequelize.VIRTUAL,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.List, { foreignKey: 'list_id', as: 'list' });
  }
}

export default Product;
