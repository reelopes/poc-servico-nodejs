const db = require('../../config/database');

module.exports = async (req, res) => {
    try {
        if (req.query.status !== undefined) {

            db.find({ status: req.query.status }, (err, response) => {
                if (err)
                    res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
                else if (response.length)
                    res.status(200).json({ error: 0, payload: { comments: response } });
                else
                    res.status(404).json({ error: 0 });
            });
        } else {
            db.find({}, (err, response) => {
                if (err)
                    res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
                else if (response.length)
                    res.status(200).json({ error: 0, payload: { comments: response } });
                else
                    res.status(404).json({ error: 0 });
            })
        }
    } catch (err) {
        res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
    }
};