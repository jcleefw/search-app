const express = require('express')
var app = express()

const searchResults = require('./data.json')

app.set('port', process.env.PORT || 8080)

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search_results', (req, res) => res.json(searchResults))

app.listen(app.get('port'), () =>
  console.log(`Example app listening on port ${app.get('port')}!`)
)
