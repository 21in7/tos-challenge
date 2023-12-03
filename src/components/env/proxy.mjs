import fetch from 'node-fetch';
import express from 'express'
const app = express();
const PORT = 3001; // Make sure this port is different from your React app's port

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Enable CORS
  next();
});

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});