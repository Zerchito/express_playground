const pool = require('../libs/postgres.pool');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err))
  }

  async find() {
    const query = `SELECT * FROM users`;
    const usersData = await this.pool.query(query)
    return usersData.rows;
  }
}

module.exports = UserService;
