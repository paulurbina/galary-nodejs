const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/images-db', {
    useNewUrlParser: true,
})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));