const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
    const { number1, number2 } = req.body;
    const sum = parseFloat(number1) + parseFloat(number2);
    res.json({ sum });
});

module.exports = router;
