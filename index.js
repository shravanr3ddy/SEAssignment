const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const cors = require('cors'); // Import CORS package
const path = require('path'); // Make sure to import 'path' at the top

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use('/api', apiRoutes);

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
