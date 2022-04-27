const express = require('express')
const faker = require('faker')

router = express.Router()

router.get('/', (req, res) => {
    const users = createUsers()
    const { limit, offset } = req.query
    if ( limit > 0 && offset < 101 && limit < offset ) {
        res.json(users.slice(limit, offset))
    } else {
        res.json(users)
    }
})

const createUsers = () => {
    const users = []
    for (let i = 0; i < 100; i++) {
        users.push({
            id: i + 1,
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email()
        })
    }
    return useres
}

module.exports = router