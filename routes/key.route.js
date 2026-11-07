const router = require("express").Router()
const { randomUUID } = require("node:crypto")

/* 
	? Key generation route
	* app.js mounts this router before verifyAPIKey, making /keygen unprotected.
	* That order matters: a client needs this route to obtain its first key.
*/

router.get("/keygen", (req, res) => {
	// ? randomUUID() creates a new UUID-shaped value for the client to use as a key.
	let apiKey = randomUUID()
	// ? This route handler is the controller for key generation:
	// ? it performs the work and ends the request with a JSON response.
	res.status(201).json({ apikey: apiKey })
})

module.exports = router
