const express = require("express");
const app = express();
const path = require('path');
// import multer and create a storage
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')//images is the name of the folder
    },
    filename: (req, file, cb) => {
        console.log(file);
        const fileName = Date.now() + path.extname(file.originalname); 
        cb(null, fileName)
    }
})
// set upload middleware
const upload = multer({ storage: storage })

app.set("view engine", "ejs");

app.get("/upload", (req, res) => {
    res.render("upload");
});
// upload the image && the name of the html input == ('name')
app.post("/upload", upload.single('image'), (req, res) => {
    res.send("Image uploaded");
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});