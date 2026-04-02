const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from config/.env
dotenv.config({ path: './config/.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});