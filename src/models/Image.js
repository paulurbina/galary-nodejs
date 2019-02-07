const { Schema, model } = require('mongoose');

const Image = new Schema({
    title: String,
    description: String,
    imagenURL: String,
    public_id: String
});

module.exports = model('Image', Image);