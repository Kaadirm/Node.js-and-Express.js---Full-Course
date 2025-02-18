const path = require('path');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const uploadProductImageLocal = async (req, res) => {

    if (!req.files) {
        throw new CustomError.BadRequestError('No File Uploaded');
    }

    const productImage = req.files.image;

    if (!productImage.mimetype.startsWith('image')) {
        throw new CustomError.BadRequestError('Please Upload Image');
    }

    if (productImage.size > process.env.MAX_FILE_UPLOAD) {
        throw new CustomError.BadRequestError(`Please upload an image smaller than ${process.env.MAX_FILE_UPLOAD}`);
    }

    const imagePath = path.join(__dirname, `../public/uploads/${productImage.name}`);

    await productImage.mv(imagePath);
    return res.status(StatusCodes.OK).json({ image: { src: `/uploads/${productImage.name}` } });
};

const uploadProductImage = async (req, res) => {
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,
        {
            use_filename: true, folder: "file-upload"
        }
    );
    fs.unlinkSync(req.files.image.tempFilePath);
    return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
}

module.exports = {
    // uploadProductImageLocal,
    uploadProductImage
};
