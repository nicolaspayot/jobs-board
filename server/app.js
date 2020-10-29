const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const jobs = require('./jobs.json');

const categories = {
    DRAFT: '🚧 ',
    PUBLISHED: '✅ '
}

app.use(cors());

app.get('/jobs', (req, res) => {
    const cat = req.query.cat;
    if (cat && categories[cat]) {
        console.log(`Requesting ${cat} jobs ${categories[cat]}`);
        res.json(jobs.filter(job => job.category === cat));
    } else {
        console.log(`Requesting ALL jobs 🚀`);
        res.json(jobs);
    }
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
