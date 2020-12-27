const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const mysql = require('mysql');
const app = express();

// koneksi ke database mysql
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_nodejs'
});

// konfigurasi multer disk storage
const storage = multer.diskStorage({
  destination: path.join(__dirname + '/public/uploads'),
  filename: (err, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage }).single('img');

// set view engine ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/uploads')));
app.use(express.static(path.join(__dirname, '/public/css')));

app.get('/', (req, res) => {
  let sql = `SELECT * FROM multer_uploads`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.render('index', {
      title: 'Multer Upload',
      images: result
    });
  })
});

app.get('/add', (req, res) => {
  res.render('add-img', {
    title: 'Multer Upload - Add Image'
  })
});

app.post('/add', (req, res) => {
  upload(req, res, err => {
    if (err) throw err;

    // insert gambar ke database
    let sql = `INSERT INTO multer_uploads VALUES(0, '${req.file.filename}', '${req.body.deskripsi}')`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.redirect('/');
    });
  });
});

app.use((req, res) => {
  res.status(404).send('404');
});

db.connect((err) => {
  if (err) throw err;
  console.log('koneksi ke mysql');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});