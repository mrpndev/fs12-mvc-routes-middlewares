require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "127.0.0.1"

const timestamp = require("./middlewares/timestamp")
const routes = require("./routes/api.route")
const keyroute = require("./routes/key.route")
const verifyAPIKey = require("./middlewares/verifyAPIKey")

/* 
	? Middleware Chaining
	* Every request can go through one or more app.use() calls.
	* Express runs those functions in the order they are registered.
	* A middleware either calls next() to continue or sends a response to end the request.
*/

app.use(express.json())
// ? Parses an incoming JSON body and places the result on req.body.
app.use(timestamp)
// ? Adds a timestamp to the request, then calls next() so the request can continue.

// ? This router is intentionally mounted before verifyAPIKey.
// ? /keygen is the one unprotected route: a client must be able to request a key
// ? before it has a key to put in the apikey header.
app.use(keyroute)

// ? For requests handled by routes, Express runs verifyAPIKey first.
// ? If the key is valid, verifyAPIKey calls next() and routes can respond.
// ? If it is invalid, verifyAPIKey sends 403 and this router is never reached.
app.use(verifyAPIKey, routes)

app.listen(PORT, HOST, () => {
	console.log(`[server] listening on ${HOST}:${PORT}`)
})

/* 
	? Model View Controller Architecture (MVC)
	* a way to architect your application
	* handles full stack apps
	* breaks full stack application into three categories:
		* model (data)
		* view (client) browser, Postman, curl
		* controller (business logic)
	* MVC is used for Separation of Concerns
		* process where we separate different functionality
		* helps with code readability and maintainability
*/
