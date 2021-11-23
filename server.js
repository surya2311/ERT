const app = require(`./app`);

PORT = 1000;

app.listen(PORT, () => {
  console.log(`Port is running in ${PORT}`);
});
