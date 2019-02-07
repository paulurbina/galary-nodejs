if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

var app = require('./app');

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});