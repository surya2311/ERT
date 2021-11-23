const express = require(`express`);
const path = require('path');
const login = require(`./routes/login`);
const index = require(`./routes/index`);
const register = require(`./routes/register`);

app = express();

app.use(express.static(`${__dirname}/public`));

app.use(index);

app.use(register);

app.use(login);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

module.exports = app;
