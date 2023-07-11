# Book Search Engine - MERN Application 

## Description 

Fully functioning Google Books API search engine built with a RESTful API, refactored be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.

- Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
- Modify the existing authentication middleware so that it works in the context of a GraphQL API.
- Create an Apollo Provider so that requests can communicate with an Apollo Server.
- Deploy the application to Heroku.

### TODO

SaveBook button does not work - PUT error 
RemoveBook needs to be tested.

0.0.0.0/0 - heroku 

### DONE

- npm i apollo
- apollo set up in server.js (used to call the typedef and resolvers)
- schemas is created, index (filled), resolver and typedef are created
- books schema is in user.js called in index.js
- typedefs have been added based off User.js
- resolvers are set up for function to be added
- App.js: Create an Apollo Provider to make every request work with the Apollo server SearchBooks.js: Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.
- SignupForm.js: `Replace the addUser() functionality imported from the API file with the ADD_USER mutation functionality.`
- LoginForm.js: `Replace the loginUser() functionality imported from the API file with the LOGIN_USER mutation functionality.`