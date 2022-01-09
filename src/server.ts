import app from './app';
import endpoint from './endpoints/index';

require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App Started on ${port}`);
});

app.get("/", endpoint);