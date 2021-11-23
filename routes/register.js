const express = require('express');

const router = express.Router();

const path = require('path');

const rootDir = require('../utils/path');

router.get('/register', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'register.html'));
});

module.exports = router;
