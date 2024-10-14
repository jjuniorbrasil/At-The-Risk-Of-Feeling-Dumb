require('./loadEnviroment.js');
const app = require('./app').app;

// EXT. DATA
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}.`);
});
