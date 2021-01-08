const axios = require('axios')

class Breed {
    static async getKlasemen(req, res, next) {
        try {
            console.log('object');
            const { data } = await axios.get("https://api.thecatapi.com/v1/images/search"
            )
            res.status(200).json(data)
        } catch (error) {
            console.log(error, 'test');
            next(error)
        }
    }
}

module.exports = Breed