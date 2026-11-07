require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "127.0.0.1"

const timestamp = require("./middlewares/timestamp")
const routes = require("./routes/api.route")

/* 
	? Middleware Chaining
	* every request will go through our app.use()
	* part of Express' framework
	* allows us to gracefully handle errors, parsing, etc.
*/

app.use(express.json())
// ? parses our incoming request JSON body
app.use(timestamp)
// ? used for binding middleware to use it

app.use(routes)

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