const { Pet } = require('../models/index')

class PetController{
    static findAvailablePet(req, res, next) {
        Pet.findAll({
            where: {
                status: "available"
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
    static pending(req, res, next) {
        Pet.findAll({
            where: {
                status: "pending"
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
    static findByType(req, res, next) {
        Pet.findAll({
            where: {
                type: req.params.filter
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
    static insert(req, res, next) {
        let obj = {
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            type: req.body.type,
            imageUrl: req.body.imageUrl,
            sex: req.body.sex,
            age: req.body.age,
            userId: req.user.id
        }
        Pet.create(obj)
        .then(data => res.status(201).json(data))
        .catch(err => {
            next(err)
        })
    }
    static findOne(req, res, next) {
        let id = req.params.id
        Pet.findByPk(id)
        .then(data => {
            if(data !== null) {
                res.status(200).json(data)
            } else {
                next({
                    name: "ResourceNotFound" 
                })
            }
        })
        .catch(() => {
            next(err)
        })
    }
    static update(req, res, next) {
        let id = +req.params.id
        let obj = {
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            type: req.body.type,
            imageUrl: req.body.imageUrl,
            sex: req.body.sex,
            age: req.body.age,
            userId: req.user.id
        }
        Pet.update(obj,{
            where: {
                id
            },
            returning: true
        })
        .then((data) => {
            if(data[0]) {
                res.status(200).json(data[1])
            } else {
                next({
                    name: "ResourceNotFound" 
                })
            }
        })
        .catch(err => {
            next(err)
        })
    }
    static patch(req, res, next) {
        let id = +req.params.id
        let obj = { status:req.headers.status }
        Pet.update(obj, {
            where: {
                id
            },
            returning: true
        })
        .then((data) => {
            if(data[0]){
                res.status(200).json(data[1])
            } else {
                next({
                    name: "ResourceNotFound" 
                })
            }
        })
        .catch(err => {
            next(err)
        })
    }
    static delete(req, res, next) {
        let id = +req.params.id
        let deleted = {
            name: 'Pet success to delete'
        }
        Pet.destroy({
            where: {
                id
            }
        })
        .then((data) => {
            if(data === 1) {
                res.status(200).json(deleted)
            } else {
                next({
                    name: "ResourceNotFound" 
                })
            }
        })
        .catch(() =>  {
            next(err)
        })
    }
}

module.exports = PetController