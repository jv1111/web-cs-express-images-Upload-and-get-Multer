const path = require('path');
// import multer and create a storage
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')//images is the name of the folder
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + path.extname(file.originalname); 
        cb(null, fileName)
    }
})
// set upload middleware
const upload = multer({ storage: storage });

module.exports = upload;