const axios = require('axios')

class Dog {
    static async getKlasemen(req, res, next) {
        try {
            console.log('object');
            const { data } = await axios.get("https://random.dog/woof.json"
            )
            res.status(200).json(data)
        } catch (error) {
            console.log(error, 'test');
            next(error)
        }
    }
}

module.exports = Dog