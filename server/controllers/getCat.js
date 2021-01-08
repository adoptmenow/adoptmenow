const axios = require('axios')

class Cat {
    static async getKlasemen(req, res, next) {
        try {
            console.log('object');
            const { data } = await axios.get("https://aws.random.cat/meow"
            )
            res.status(200).json(data)
        } catch (error) {
            console.log(error, 'test');
            next(error)
        }
    }
}

module.exports = Cat