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
	let date = new Date()
	let timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
	
	req.timestamp = timestamp
	console.log(timestamp)

	next()
	// ? calls the next function in the call stack
}

module.exports = timestamp