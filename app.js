const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_nodejs'
});

const storage = multer.diskStorage({
  destination: (err, file, cb) => {
    cb(null, path.join(__dirname, '/public/uploads'));
  },
  filename: (err, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// set view engine ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join('/public/uploads')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Multer Upload'
  });
});

app.get('/add', (req, res) => {
  res.render('add-img', {
    title: 'Multer Upload - Add Image'
  })
});

app.post('/', upload.single('upload_file'), (req, res) => {
  console.log(req.file, req.body);
  res.end();
});

db.connect((err) => {
  if (err) throw err;
  console.log('koneksi ke mysql');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});