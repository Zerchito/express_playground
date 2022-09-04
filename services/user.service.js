const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');
class UserService {
  constructor() {
  }

  async create(userData) {
    const newUser = await models.User.create(userData);
    return newUser;
  }

  async find() {
   const usersData = await models.User.findAll();
    return usersData;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const userData = await user.update(changes);
    return userData;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy()
    return { id };
  }
}

module.exports = UserService;
