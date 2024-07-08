require('dotenv').config()
const express = require('express')
const app = express()
//we can use many function of app
const port = 4004

app.get('/', (req, res) => {// we use this to to take request and give the respons to the user 
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('hellocom ')
})

app.get('/login',(req,res) =>{
    res.send('<h1> please login at my portal</h1>')
})
app.get('/youtube',(req,res) =>{
    res.send('<h1>hellow everyone</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.listen(process.env.PORT,()=>{
//     console.log('example app listuening on port ${}')
// })