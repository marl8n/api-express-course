const express = require('express')
const faker = require('faker')

router = express.Router()

router.get('/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params
    res.json({
        categoryId,
        productId,
    })
})

module.exports = router