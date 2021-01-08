const { User } = require('../models/index')
const { comparePassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')
const DEFAULT_GOOGLE_PASSWORD = "1Ff-GBlVO_TuLJzGZYjlWIJT"

class UserController {
    static register (req, res, next) {
        let obj = {
            email: req.body.email,
            password: req.body.password,
            nama: req.body.nama,
            role: req.body.role||"user"
        }
        // console.log(obj);
        User.create(obj)
        .then(user => {
            const response = {
                id: user.id,
                name: user.nama,
                email: user.email,
                role: user.role||"user"
            }
            res.status(200).json(response)
        })
        .catch(err => {
                next(err)
        })
    }
    static async login (req, res, next) {
        try {
            const obj = {
                email: req.body.email,
                password: req.body.password,
            }
            const user = await User.findOne({
                where: { 
                    email: obj.email 
                }
            })
            if (!user) {
                return next({
                    name: "invalid email / password" 
                })
            }
            const match = comparePassword(obj.password, user.password)
            if (match) {
                //jwt
                // console.log(match);
                const payload = {
                    id: user.id,
                    email: user.email
                }
                const access_token = generateToken(payload)
                return res.status(200).json({
                    id: user.id,
                    name: user.nama,
                    email: user.email,
                    role: user.role,
                    access_token: access_token
                })
            } else {
                return next({
                    name: "invalid email / password" 
                })
            }

        } catch (error) {
            // console.log(error);
            return next(error)
        }
    }

    static async googleLogin(req, res, next) {
        const google_token = req.headers.google_token

        try {
            const payload = await verifyGoogle(google_token)
            const email = payload.email
            const user = await User.findOne({
                where: {
                    email
                }
            })
            const password = DEFAULT_GOOGLE_PASSWORD
            if(user) {
                let check = comparePassword(password, user.password)
                if(check) {
                    const token = verifyToken({id: user.id, email: user.email, }, SECRET)
                    res.status(200).json({user, token})
                } else {

                }
            } else {
                const newUser = await User.create({
                    email,
                    password
                })
                const token = generateToken({id: newUser.id, email: newUser.email, }, SECRET)
                res.status(200).json({token})

            }
        } catch(err) {
            next(err)
        }
    }
}

module.exports = UserController