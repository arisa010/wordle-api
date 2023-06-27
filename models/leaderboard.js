const db = require('../db/db')

const Leaderboard = {
    findAll: async () => {
        
          const query = 'SELECT * FROM leaderboard ORDER BY score DESC';
          const result = await db.query(query);
          return result.rows;
    }
}

module.exports = Leaderboard