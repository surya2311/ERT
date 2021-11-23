const express = require('express');

const router = express.Router();

const path = require('path');

const rootDir = require('../utils/path');

router.get('/login', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'login.html'));
});

router.post('/login', (req, res, next) => {
  res.redirect('/index');
});

module.exports = router;
