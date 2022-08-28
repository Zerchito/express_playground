const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorTyping, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello user');
});

app.listen(port, () => {
  console.log(port);
});

app.use(logErrors);
app.use(errorTyping);
app.use(errorHandler);

routerApi(app)
