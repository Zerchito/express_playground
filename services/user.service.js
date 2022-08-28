const getConnection = require('../libs/postgres');

class UserService {
  constructor() {}

  async find() {
    const client =  await getConnection();
    const usersData = await client.query("SELECT * FROM users")
    return usersData.rows;
  }
}

module.exports = UserService;
