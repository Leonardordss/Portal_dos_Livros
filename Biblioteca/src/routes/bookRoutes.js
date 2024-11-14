const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { addBook, removeBook, getAllBooks, searchBooksByTitle } = require('../controllers/bookController');

router.post('/add', authMiddleware, addBook);
router.delete('/remove/:isbn', authMiddleware, removeBook);
router.get('/all', authMiddleware, getAllBooks);
router.get('/search', authMiddleware, searchBooksByTitle);

module.exports = router;




