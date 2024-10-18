const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send('Hello World from the Dockerized App!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
