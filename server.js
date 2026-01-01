const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Kebab-case site is grilling hot on port ${PORT} 🔥🥙`);
  console.log(`Open http://localhost:${PORT} to taste the spice!`);
});
