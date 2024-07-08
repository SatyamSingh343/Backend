require('dotenv').config()
const express = require('express')
const app = express()
//we can use many function of app
const port = 4004
const githubdtata={
    "login": "SatyamSingh343",
    "id": 91589901,
    "node_id": "U_kgDOBXWNDQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/91589901?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SatyamSingh343",
    "html_url": "https://github.com/SatyamSingh343",
    "followers_url": "https://api.github.com/users/SatyamSingh343/followers",
    "following_url": "https://api.github.com/users/SatyamSingh343/following{/other_user}",
    "gists_url": "https://api.github.com/users/SatyamSingh343/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SatyamSingh343/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SatyamSingh343/subscriptions",
    "organizations_url": "https://api.github.com/users/SatyamSingh343/orgs",
    "repos_url": "https://api.github.com/users/SatyamSingh343/repos",
    "events_url": "https://api.github.com/users/SatyamSingh343/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SatyamSingh343/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Satyam Kumar Singh",
    "company": null,
    "blog": "Satyam.Singh343.github.com",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 21,
    "public_gists": 1,
    "followers": 0,
    "following": 0,
    "created_at": "2021-09-29T06:31:41Z",
    "updated_at": "2024-07-06T17:18:55Z"
  }
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
app.get('/github',(req,res)=>{
    res.json(githubdtata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.listen(process.env.PORT,()=>{
//     console.log('example app listuening on port ${}')
// })