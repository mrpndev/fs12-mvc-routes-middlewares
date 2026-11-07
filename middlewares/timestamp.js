/* 
	? Middleware
	* a function that can do anything
	* has access to request & can modify it
	* has access to response & can modify it
	* has access to the next function in the call stack
	* requires next()
	
	? Call Stack
	* an order of function execution
	* stack is a LIFO (last in first out)
*/

function timestamp(req, res, next) {
	// ? Middleware can read and add properties to req before the route handler runs.
	let date = new Date()
	let timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
	
	req.timestamp = timestamp
	console.log(timestamp)

	next()
	// ? next() hands the request to the next middleware or route in the stack.
}

module.exports = timestamp
