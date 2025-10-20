const express = require('express') // require modle expresion
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => { // path should be 'This string' "we can't use normal string"
    res.send('My Twitter account')
})

// HOT reloading // node mole
/*
    When we create after our server is run 
    the 
*/
app.get('/login', (req, res) => {
    res.send('<h1>Plese login at EGATOR</h1>');
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
