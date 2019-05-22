const express = require('express');

const productRoutes = require('./routes/product');

const app = express();

app.use(productRoutes);

app.listen(8080);