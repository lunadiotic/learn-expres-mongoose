const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1/shop_db')
    .then((result) => {
        console.log('connected to mongodb')
    }).catch((err) => {
        console.log(err)
    });

const seedProducts = [
    {
        "name": "Kemeja Flanel",
        "brand": "Hollister",
        "price": 750000,
        "color": "biru muda",
        "size": "M",
    },
    {
        "name": "Celana Chino",
        "brand": "Levi's",
        "price": 900000,
        "color": "krem",
        "size": "XL",
    },
    {
        "name": "Sweater",
        "brand": "Gap",
        "price": 650000,
        "color": "merah muda",
        "size": "S",
    },
    {
        "name": "Tas Ransel",
        "brand": "Herschel",
        "price": 1500000,
        "color": "biru",
        "size": "L",
    },
    {
        "name": "Kacamata Aviator",
        "brand": "Ray-Ban",
        "price": 2000000,
        "color": "emas",
        "size": "L",
    },
    {
        "name": "Baju Renang",
        "brand": "Speedo",
        "price": 500000,
        "color": "biru tua",
        "size": "XL",
    },
    {
        "name": "Topi Baseball",
        "brand": "New Era",
        "price": 350000,
        "color": "hitam",
        "size": "M",
    },
    {
        "name": "Rompi",
        "brand": "Zara",
        "price": 850000,
        "color": "abu-abu",
        "size": "M",
    },
    {
        "name": "Jas",
        "brand": "Hugo Boss",
        "price": 4500000,
        "color": "hitam",
        "size": "L",
    },
]

Product.insertMany(seedProducts).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})