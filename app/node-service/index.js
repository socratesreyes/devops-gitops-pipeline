const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ status: "running", message: "Node Heavy Flavor" });
});

app.get('/process', async (req, res) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunks = _.chunk(numbers, 2);
    try {
        const apiCall = await axios.get('https://api.github.com');
        res.json({ chunks, apiStatus: apiCall.status });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Node app listening on port ${PORT}`));
