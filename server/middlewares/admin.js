const { checkToken } = require('../helper/jwt')
const { User } = require('../models/index')

const isAdmin = (req, res, next) => {
    try {
        let decoded = checkToken(req.headers.access_token)
        console.log(decoded);
        User.findAll({
            where : {
                email: decoded.email 
            }
        })
        .then(userLogin => {
            console.log(userLogin);
            if (userLogin[0].role === "admin") {

                next()
            } else {
                next({
                    name: "unauthorize" 
                })
            }    
            
        })
        .catch(err => {
            next(err.message)
        })
        
    } catch (err) {
        // console.log(err.name);
        next({
            name: "please login first" 
        })
    }
}

module.exports = {isAdmin}