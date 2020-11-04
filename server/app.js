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
    const ownerId = req.query.ownerId;
    if (ownerId) {
        console.log(`Requesting jobs for user: ${ownerId} 🚀`);
        const results = jobs.filter(job => job.ownerId === ownerId);
        return res.status(200).json(results);
    }

    const category = req.query.category;
    if (category && categories[category]) {
        console.log(`Requesting all ${category} jobs ${categories[category]}`);
        const results = jobs.filter(job => job.category === category)
        return res.status(200).json(results);
    }

    console.log(`Requesting ALL jobs 🚀`);
    return res.status(200).json(jobs);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
