const mongoose = require('mongoose');

// Definindo o esquema de Livro
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  pages: { type: Number, required: true },
  isbn: { type: String, required: true, unique: true }
});

// Criando o modelo com base no esquema
const Book = mongoose.model('Book', BookSchema);

module.exports = Book;




