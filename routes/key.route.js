const router = require("express").Router()
const { randomUUID } = require("node:crypto")

/* 
	? Challenge
	* create a GET route /keygen
	* the route should generate an API key
	* feel free to use a built in tool below to generate it
	* the route should return this key in the response
	* build a middleware that verifies this key, example below
	* now protect your routes by passing them thru this middleware
	* if successful, you should see responses from your routes
	* if not successful, you should send a 403 status with JSON message: Forbidden
*/

router.get("/keygen", (req, res) => {
	let apiKey = randomUUID()
	res.status(201).json({ apikey: apiKey })
})

module.exports = router