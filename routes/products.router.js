const express = require('express')
const faker = require('faker')

router = express.Router()

router.get('/', (req, res) => {
    const products = createProducts()
    const { limit, offset} = req.query
    if (limit > 0 && offset < products.length && limit < offset) {
        res.json(products.slice(limit, offset))
    } else{
        res.json(products)
    }
})

router.get('/filter', (req, res) => {
    res.send('I\'m a filter')
})

router.get('/:productId', (req, res) => {
    const products = createProducts()
    const { productId } = req.params
    const product = products.find(product => product.id == productId)
    if (product){
        res.status(200).json(product)
    } else {
        res.status(404).json({
            message: 'Product not founded',
        })
    }
})

router.post('/create', (req, res) => {
    const bodyRequest = req.body
    res.status(201).json({
        message: 'created',
        data: bodyRequest,
    })
})

router.patch('/update-name/:idProduct', (req, res) => {
    const products = createProducts()
    const { idProduct } = req.params
    const body = req.body
    const product = products.find(p => p.id == idProduct)
    if(product){
        product.name = body.name
        res.status(200).json({
            message: 'updated',
            product,
        })
    } else {
        res.status(404).json({
            message: 'Product not founded',
        })
    }
})

function createProducts() {
    const products = []
    for(let idx = 0; idx < 100; idx++) {
        products.push({
            id: idx + 1,
            name : faker.commerce.productName(),
            price : parseInt(faker.commerce.price(), 10),
            image : faker.image.imageUrl(),
        })
    }
    return products
}

module.exports = router