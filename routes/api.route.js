/* 
	? Router
	* an object handlign routing and middleware only
	* helps with scope pollution (access to all methods when not needed)

	? Basic Routing
	* router.method() handles request type
	* GET, POST, PUT, DELTE, PATCH, OPTIONS, etc.
	* takes an endpoint
	* any middlewares as params
	* and a callback with business logic
	* we then send a response
*/

const router = require("express").Router();
// invoking router interface

/* 
	? GET endpoint
	* used for reading or creating
	* has headers
	* has queries and params
	* no body
*/

// ! if we do this, we will never reach /all because /:name treats everything after / as param

// router.get("/:name", (req, res) => {
// 	res.status(200).json({
// 		message: `Welcome, ${req.params.name}`
// 	})
// })

router.get("/all", (req, res) => {
	res.status(200).json({
		message: `Hit ${req.method} ${req.url} endpoint`,
	});
});

/* 
	? POST endpoint
	* used for creation or reading
	* has headers
	* has queries and params
	* has body
*/

router.post("/", (req, res) => {
	console.log(`The body of the request: `, req.body);

	console.log(req.body.email);

	/* 
		? Object Destructuring
		* a way to extract properties from an object
		* saves us repeating ourselves
	*/

	let { fullName, email, password } = req.body;

	console.log(fullName, email, password);

	// equivalent to: let fullName = req.body.fullName

	res.status(200).json({
		message: `Hit ${req.method} ${req.url} endpoint`,
	});
});

/* 
	? PUT endpoint
	* used for updating data
	* has headers
	* has queries and params (frequently)
	* has body
*/

/* 
	? Params
	* a dynamic route
	* parameters within an object
	* server-side they will dynamically inject a value
	* denoted by /:key (colon)
	* value accessed using request.params
*/

router.put("/:id", (req, res) => {
	// ? id becomes a variable in the world of endpoints
	console.log(req.params);
	console.log(req.params.id);
	let { id } = req.params;
	console.log(id);

	res.status(200).json({
		message: `Hit ${req.method} ${req.url} endpoint`,
		result
	});
});

/* 
	? DELETE endpoint
	* used for deleting data
	* has headers
	* has queries and params (frequently)
	* has body
*/

router.delete("/delete", (req, res) => {
	res.status(200).json({
		message: `Hit ${req.method} ${req.url} endpoint`,
	});
});

module.exports = router;
// exports the modified content of an object elsewhere
