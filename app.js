const express = require('express');
const exphbs = require('express-handlebars'); 

const app = express();

//handlebars middleware

app.engine('handlebars', exphbs({
    defaultLayout:'main'
}));
app.set('view engine', 'handlebars')

// index route
app.get('/', (req, res) => {
    const title = 'Welcome2';
    res.render('index', {
        title: title
    });

});
// about page
app.get('/about', (req, res) => {
    res.render('about');
});
const port = 5000;

app.listen(port, () => {
    console.log(`server started on port${port}`)
});