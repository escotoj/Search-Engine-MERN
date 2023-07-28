require('dotenv').config();
const MongoStore = require('connect-mongo');
const session = require('express-session');

const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require("./schemas.js");
const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

// add files for each
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use(
    session({
      secret: process.env.JWT_SECRET,
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      },
    })
  );
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};


startApolloServer();
