module.exports = function (err, req, res, next) {
	// ini base value untuk error-nya
    let message = 'internal server error'
	let statusCode = 500
	let { errorDesc } = err
	
	console.log(err, errorDesc);
	switch (errorDesc) {
		case "SequelizeValidationError":
			statusCode = 400;
			message = err.errors.map(el => {
				return el.message
			}).join(", ");
            break;
            
		case "InvalidEmailorPassword":
			statusCode = 400;
			message = "Email or Password is Invalid!";
            break;
            
		case "AuthenticationFailed":
			statusCode = 401;
			message = "Authentication failed!"
            break;
            
		case "Unauthorized":
			statusCode = 403;
			message = "Unauthorized action!"
            break;
            
		case "NotFound":
			statusCode = 404;
			message = "Not found!"
            break;
	}
    return res.status(statusCode).json({message})
}