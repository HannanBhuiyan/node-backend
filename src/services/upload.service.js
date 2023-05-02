const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const AWS = require('aws-sdk');
const UploadImage = require("../models/upload.model");
const config = require('../config/config');
require('dotenv').config()



const uploadImage = async (requestFile) => {

    AWS.config.update({
        accessKeyId: process.env.ACCESSKEYID,
        secretAccessKey: process.env.SECRETKEYASSECCID,
    })

    const fileContent = Buffer.from(requestFile.files.image.data, 'binary')
    const params = {
        Bucket: "beige-asset",
        Key: "profile/"+requestFile.files.image.name,
        Body: fileContent,
        ContentType: 'image/jpeg',
    }
    const s3 = new AWS.S3()
    s3.upload(params, async (error, data) => {
        if(error){
            throw error 
        }
        const newImage = new UploadImage({
            image: data.key
        })
        await newImage.save();
        return newImage;
    })
    
}


module.exports = {
    uploadImage
}