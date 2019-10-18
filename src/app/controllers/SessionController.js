import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const { id, name } = req.body;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, '0566aeb5942e9522e6495384941a39c7', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
