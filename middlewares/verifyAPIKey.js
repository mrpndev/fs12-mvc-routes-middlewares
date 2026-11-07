function verifyAPIKey(req, res, next) {
	console.log(req.headers.apikey)
	const uuidRegex =
		/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

	const isKeyValid = uuidRegex.test(req.headers.apikey);
	
	// if (isKeyValid) {
	// 	next()
	// } else {
	// 	res.status(403).json({message: "Forbidden"})
	// }

	if (!isKeyValid) {
		return res.status(403).json({message: "Forbidden"})
	}

	next()
}

module.exports = verifyAPIKey;
