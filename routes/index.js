// Express
const express = require('express')

// Routers
const productsRouter = require('./products.router')
const categoriesRouter = require('./categories.router')
const usersRouter = require('./users.router')

const routerApi = (app) => {
    // New router to use prefix /api/v
    const router = express.Router()
    app.use('/api/v1', router)
    // Routes
    router.use('/products', productsRouter)
    router.use('/categories', categoriesRouter)
    router.use('/users', usersRouter)
}

module.exports = routerApi