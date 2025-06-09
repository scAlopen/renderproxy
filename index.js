const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Ultraviolet Proxy is running on Render!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
