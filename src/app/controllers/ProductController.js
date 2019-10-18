import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    const { id, name, quantity, unit, price, category } = await Product.create(
      req.body
    );

    return res.json({
      id,
      name,
      quantity,
      unit,
      price,
      category,
    });
  }
}

export default new ProductController();
