const db = require('../../config/database');

module.exports = async (req, res) => {

    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).json({
            error: { code: '400', message: 'Deu Ruim' }, payload: { comments: 'Só Aceito JSON' }
        })
    } else {

        try {
            db.insert(req.body, (err, dbResponse) => {
                if (err) res.status(500).json({ error: { message: err.message }, payload: null });
                else if (dbResponse !== undefined) res.status(201).json({ error: 0, payload: { comments: dbResponse } });
                else res.location(`${req.originalUrl}`).status(303).json();
            });
        } catch (err) {
            res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
        }

    }
}