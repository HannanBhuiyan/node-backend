const { Schema, model } = require("mongoose");

const uploadSchema = new Schema({
    image: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const UploadImage = model('UploadImage', uploadSchema)
module.exports = UploadImage
