// resolvers is for the query

const { User } = require("../models/index");

const resolver = {
  Query: {
    me: async () => {
      // function for this field would implement the logic to fetch the current user from a database or any other data source.
      return await User.findOne(_id);
    },
  },
  Mutation: {
    login: async (root, { email, password }) => {
        console.log("LOGIN");
        return await User.findById({email, password})
    },
  },
    addUser: async (root, { username, email, password }) => {
        return await User.findByIdAndUpdate({username})
    console.log("ADDUSER");
  },
    saveBook: async (root, { input }) => {
    console.log("SAVEBOOK");
  },
    removeBook: async (root, { bookId }) => {
    console.log("DELETE");
  },

  User: {
    e,
  },
};

module.exports = resolver;
