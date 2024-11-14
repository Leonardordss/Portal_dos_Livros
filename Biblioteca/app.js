const express = require('express');
const app = express();
const bookRoutes = require('./src/routes/bookRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.json());
app.use('/books', bookRoutes);
app.use('/auth', authRoutes);

module.exports = app;



