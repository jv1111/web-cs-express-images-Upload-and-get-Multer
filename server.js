const express = require("express");
const app = express();
const upload = require("./multer");
const path = require('path');

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("upload");
});
app.get("/download", (req, res) => {
    res.render("download");
});

// upload the image && the name of the html input == ('name')
app.post("/upload", upload.single('image'), (req, res) => {
    res.send("Image uploaded");
});

// images is the created directory where images is stored
app.use(express.static('images'));
app.get('/getImage', (req, res) => {
    const image = '/myPic.png';
    res.json({
        message:"getting",
        image: image
    });
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});