const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// 🔥 Banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/beers');

const Beer = mongoose.model('Beer', {
  name: String,
  description: String,
  photo: String,
  latitude: String,
  longitude: String,
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });




app.get('/beers', async (req, res) => {
  const beers = await Beer.find();
  res.json(beers);
});


app.post('/beers', upload.single('photo'), async (req, res) => {
  const { name, description, latitude, longitude } = req.body;
  const photo = req.file ? req.file.path : null;
  const beer = new Beer({ name, description, photo, latitude, longitude });
  await beer.save();
  res.json(beer);
});


app.listen(3000, () => console.log('🍺 Backend listening on port 3000'));
