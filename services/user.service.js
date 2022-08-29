// const pool = require('../libs/postgres.pool');
const sequelize = require('./../libs/sequelize');

class UserService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error', (err) => console.log(err))
  }

  async find() {
    const query = `SELECT * FROM users`;
    // const usersData = await this.pool.query(query)
    const [usersData, usersMetadata] = await sequelize.query(query);
    return usersData;
  }
}

module.exports = UserService;
