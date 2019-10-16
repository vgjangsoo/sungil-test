const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/posts/submit', (req, res) => {

});

app.post('/posts/submit', (req, res) => {
    const post = {
        title: req.body.title,
        email: req.body.email,
        description: req.body.description
    }
    res.send(post);
});

app.listen(8080, () => console.log("Listening on port 8080"));