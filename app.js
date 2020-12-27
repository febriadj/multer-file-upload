const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const app = express();

const upload = multer({ dest: './public/uploads' });

// set view engine ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Multer Upload'
  });
});

app.post('/', upload.single('upload_file'), (req, res) => {
  console.log(req.file, req.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});