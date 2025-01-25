const path = require('path');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const uploadProductImage = async (req, res) => {

    if(!req.files) {
        throw new CustomError.BadRequestError('No File Uploaded');
    }

    const productImage = req.files.image;

    const imagePath = path.join(__dirname, `../public/uploads/${productImage.name}`);

    await productImage.mv(imagePath);
    return res.status(StatusCodes.OK).json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = {
    uploadProductImage
};
