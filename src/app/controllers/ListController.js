import List from '../models/List';
import User from '../models/User';

class ListController {
  async store(req, res) {
    const { user_id } = req.params;
    const { name, quantity_items, price_total } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'Usuario nao existe' });
    }

    const list = await List.create({
      name,
      quantity_items,
      price_total,
      user_id,
    });

    return res.json(list);
  }
}

export default new ListController();
