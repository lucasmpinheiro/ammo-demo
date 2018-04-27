import mongoose from 'mongoose';

import db from '../services/dbConnector';

const Schema = mongoose.Schema({
    name: String,
    price: Number,
    discountedPrice: Number,
    tags: [String],
    photos: [String],
});

const Product = db.model('Product', Schema, 'products');

export default Product;
