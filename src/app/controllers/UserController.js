import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'Usuario ja cadastrado' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    // const { email } = req.body;

    // const user = await User.findByPk(req.userId);

    // if (email !== user.email) {
    //   const userExists = await User.findOne({ where: { email } });

    //   if (userExists) {
    //     return res.status(400).json({ error: 'Usuario ja existe' });
    //   }
    // }

    return res.json({ ok: true });
  }

  async index(req, res) {
    const { id, nome, email } = await User.findAll();

    return res.json({
      id,
      nome,
      email,
    });
  }
}

export default new UserController();
