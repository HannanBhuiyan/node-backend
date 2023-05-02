
const httpStatus = require("http-status");
const  uploadService  = require("../services/upload.service");

const uploadPostController = async (req, res) => {
    const result = await uploadService.uploadImage(req)
    res.status(200).send(result);
}

const uploadGetController = async (req, res) => {
    // try{
    //     const allImage = await UploadImage.find();
    //     res.status(200).json(allImage);
    // }
    // catch(error) {
    //     res.status(500).send(error.message);
    // }
}


module.exports = {
    uploadPostController,
    uploadGetController
}



