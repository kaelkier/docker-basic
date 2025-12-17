import express from 'express'

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello, There!');
});

app.listen(3000, () => {
  console.log('App listen on port 3000');
});