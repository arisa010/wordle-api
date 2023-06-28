

const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const db = require('./db/db')
const cors = require('cors')
const scoreRoutes = require('./score')
const leaderboardRoutes = require('./leaderboard')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(cors());

app.use('/score', scoreRoutes)
app.use('/leaderboard', leaderboardRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')))

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  });
}