// require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send('<h1>login or signup<h1/>')
})
app.get('/about', (req, res) => {
  res.send('Hello this is just to get the taste of express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })