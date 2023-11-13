require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbo = require('./db/conn');
const productRoutes = require('./routes/products');
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(productRoutes);

dbo.connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Serwer uruchomiony na porcie ${port}`);
    });
    console.log('Połączono z bazą danych MongoDB');
  }
});
