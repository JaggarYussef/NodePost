# NodePost



NodePost is a light backend-end logic for a blogpost website made with Node.js and Typescript. The application provides registeration and login routes where users are added to the MongoDB database and given an authentication token. The authorized user can then make a blogpost by providing a title and content. Other authorized users have the ability to comment on a given blogpost and search for users or blogposts. The user can also add blogposts to their favourite blogposts. 

# __Install:__
***
### install
`npm install`

### run
`npm run devStart`



# __functionalities:__
***

### Registeration
`Post http://localhost:8080/api/regis`

A `POST` Requist with payload the following format will add a user to the database if successfully verified.

`{
    "email": "name@email.com",
	"password" : "password",
	"userName" :"userOne"
}`

### Login
`Post http://localhost:8080/api/auth`

The same object must be provided in order to receive an auhtentication token.

`{
    "email": "name@email.com",
	"password" : "password",
	"userName" :"userOne"
}`

The authenticated user will receive a response with following object

`{
	"data": "SECRET_TOKEN",
	"message": "logged in successfully"
}
`


### Post a blogpost
`Post http://localhost:8080/api/blogpost`
The authenticated user must provide a the authentication token in the `x-access-header` before making a post request with with following payload:

`x-access-header : "SECRET_TOKEN" `


`
{
	"title": "blogpost title",
	"content" : "blogpost content"
}
`

### Post a comment on a blogpost


`Post http://localhost:8080/api/blogpost/:blogpostId/comment`

The authenticated user can post comments on a given blogpost with the following format: 

`
{
	"content" : "dummy comment content"
}
`


### Add a blogpost your favourite list

`Post http://localhost:8080/api/blogpost/:blogpostId/comment`
The authenticated user can add a blogpost to favourites by making `POST` request to this endpoint.

`{"content" : "blogpost content" }`

## __Search__

### Find user
Search for an user witrh user ID
`GET http://localhost:8080/api/search/:userId`

### Comments by user
retrieve the comments made by the user
`GET http://localhost:8080/api/search/:userId/commentsByUser`

### Blogposts by user
retrieve the bogposts made by the user
`GET http://localhost:8080/api/search/:userId/postsByUser`







## Tech

NodePost uses a number of open source projects to work properly:


- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]


Made by  Jaggar Yussef 




   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>

