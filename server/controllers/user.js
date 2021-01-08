const { User } = require('../models/index')
const { comparePassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

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
    // static loginGoogle(req, res, next) {
    //     const { id_token } = req.body
    //     let email = null

    //     const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
    //     client.verifyIdToken({
    //         idToken: id_token,
    //         audience: process.env.GOOGLE_CLIENT_ID
    //     })
    //         .then(ticket => {
    //             const payload = ticket.getPayload()
    //             console.log(payload);
    //             email = payload.email

    //             return User.findOne({
    //                 where: { email }
    //             })
    //         })
    //         .then(user => {
    //             if (!user) {
    //                 return User.create({
    //                     email,
    //                     nama: 'customer',
    //                     role: 'customer',
    //                     password: Math.random() * 100 + 'password random google'
    //                 })
    //             } else {
    //                 return user
    //             }
    //         })
    //         .then(user => {
    //             const payload = {
    //                 id: user.id,
    //                 email: user.email
    //             }
    //             const access_token = generateToken(payload)

    //             res.status(200).json({
    //                 id: user.id,
    //                 name: user.nama,
    //                 email: user.email,
    //                 role: user.role,
    //                 access_token: access_token
    //             })
    //         })
    //         .catch(err => {
    //             next(err)
    //         })
    //     // const userid = payload['sub'];
    //     // If request specified a G Suite domain:
    //     // const domain = payload['hd'];
    // }
}

module.exports = UserController