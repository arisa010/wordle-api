const express = require('express');
const db = require('../db/db');

const router = express.Router()

router.get('/', async (req, res) => {

    const result = await db.query('SELECT * FROM leaderboard ORDER BY score DESC');
    res.json(result.rows);

})

module.exports = router