const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.post('/', async (req, res) => {
  
    const { playerName, score } = req.body

    await db.query('INSERT INTO score_counter (score) VALUES ($1)', [score]);
    await db.query('INSERT INTO leaderboard (player_name, score) VALUES ($1, $2)', [playerName, score]);
  
})

module.exports = router;
