const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var app = express();

app.use(bodyParser.json());
app.use(cors())

var pics = [{
        name: 'Picture 1',
        location: '../../assets/images/pic1.jpeg',
        description: 'downloaded from unslpash.com, its a great resource for royalty free images.',
        likes: 2
    },
    {
        name: 'Pic2',
        location: '../../assets/images/pic2.jpeg',
        description: 'downloaded from unslpash.com, its a great resource for royalty free images.',
        likes: 3
    },
    {
        name: 'Dashing Icon',
        location: '../../assets/images/pic2.jpeg',
        description: 'This is from our service which can be shared across multiple component within module, but can also be share outside.',
        likes: 3
    }
]

app.get('/pictures', (req, res) => {
    res.send(pics);
});

app.post('/pictures', (req, res) => {
    console.log(req.body)
    res.end();
});

app.listen(3000, () => {
    setTimeout(() => {
        console.log("App is running ...")
    }, 5000)
    console.log('App listening on port 3000!');
});