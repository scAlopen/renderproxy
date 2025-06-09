const express = require('express');
const { createServer } = require('ultraviolet-static');
const { UVMiddleware } = require('ultraviolet-static/middleware');


const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use('/portal/', UVMiddleware(createServer()));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/error.html');
});

app.listen(port, () => {
  console.log(`Ultraviolet running on port ${port}`);
});
