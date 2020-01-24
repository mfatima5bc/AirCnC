// index(listageem de sessoes), show(mostra uma unica sessao), store(cria uma sessao), update(atualizar), destroy(excluir umasessão)
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }

};