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
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('No user with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },

    addUser: async (root, { username, email, password }) => {
      console.log("ADDUSER");
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
  },
    saveBook: async (root, { input }) => {
    console.log("SAVEBOOK");
    const user = {_id};
    const updatedUser = User.findByIdAndUpdate(user, { $push: { savedBooks: input } }, { new: true });
    return updatedUser;
  },
    removeBook: async (root, { bookId }) => {
      console.log("DELETE");
      return User.findOneAndUpdate(
        { _id: _id },
        { $pull: { savedBooks: {bookId} } },
        { new: true })
  
  },
},

  User: {
    _id: (root) => root._id,
    username: (root) => root.username,
    email: (root) => root.email,
    bookCount: (root) => root.savedBooks.length,
    savedBooks: (root) => root.savedBooks
    
  },
};

module.exports = resolver;
