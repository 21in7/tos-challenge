const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/steam-news', async (req, res) => {
  try {
    const response = await fetch('https://store.steampowered.com/feeds/news/app/2178420');
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Error fetching Steam news:', error);
    res.status(500).send('Error fetching Steam news');
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});