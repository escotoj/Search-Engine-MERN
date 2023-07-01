// resolvers is for the query

const bookSchema = require("../models/Book");
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
        const user = await User.findById({email, password});
        return user;

    },
  },
    addUser: async (root, { username, email, password }) => {
      console.log("ADDUSER");
      const user = new User({ username, email, password });
      await user.save();
      return user;
  },
    saveBook: async (root, { input }) => {
    console.log("SAVEBOOK");
    const book = new User(bookSchema);
    await book.save();
    return book;
  },
    removeBook: async (root, { bookId }) => {
    console.log("DELETE");
  },

  User: {
    
  },
};

module.exports = resolver;
