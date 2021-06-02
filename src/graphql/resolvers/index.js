const resolvers = {
  User: {
    projects: (parent, args, { db }, info) => {
      console.log(parent.dataValues);
      return db.Project.findByPk();
    }
  },
  Project: {

  },
  Query: {
    projects: (parent, args, { db }, info) => db.Project.findAll(),
    project: (parent, { id }, { db }, info) => db.Project.findByPk(id),
    users: (parent, args, { db }, info) => db.User.findAll(),
    user: (parent, { id }, { db }, info) => db.User.findByPk(id)
  },
  Mutation: {
    createUser: (parent, { name, email }, { db }, info) =>
      db.User.create({
        name: name,
        email: email
      }),
    updateUser: (parent, { id, name, email }, { db }, info) =>
      db.User.update({
        name: name,
        email: email
      },
        {
          where: {
            id: id
          }
        }),
    deleteUser: (parent, { id }, { db }, info) =>
      db.User.destroy({
        where: {
          id: id
        }
      }),
    createProject: (parent, { name, price, userId }, { db }, info) =>
      db.Project.create({
        name: name,
        price: price,
        userId: userId
      }),
    updateProject: (parent, { id, name, price }, { db }, info) =>
      db.Project.update({
        name: name,
        price: price
      },
        {
          where: {
            id: id
          }
        }),
    deleteProject: (parent, { id }, { db }, info) =>
      db.Project.destroy({
        where: {
          id: id
        }
      })
  }
};

export default resolvers;