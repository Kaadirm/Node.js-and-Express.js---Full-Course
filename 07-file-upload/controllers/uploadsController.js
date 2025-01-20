const path = require('path');

const { StatusCodes } = require('http-status-codes');

const uploadProductImage = async (req, res) => {
    const productImage = req.files.image;

    const imagePath = path.join(__dirname, `../uploads/${productImage.name}`);

    await productImage.mv(imagePath);
    res.send('upload product iamge');
};

module.exports = {
    uploadProductImage
};
