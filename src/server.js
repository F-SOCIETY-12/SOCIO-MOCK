const express = require('express')

const {db} = require('./db/models')
const { usersRoute } = require('./routes/users')     //routes folders me 
const { postsRoute } = require('./routes/posts')     //routes folder me posts folder hai
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users', usersRoute)      ///ye var "<--usersRoute-->" me jo hai ab iss "<-route-->" pe hai
app.use('/api/posts', postsRoute)     
////<--------------------------by default ye page hi khulega------------------------------>
app.use('/',express.static(__dirname + '/public'))

db.sync()
.then(()=>
{
    app.listen(3434,()=>
    {
        console.log('http://localhost:3434')
    })
})
.catch((err)=>
{
console.error(new Error('Could not start database'))
console.error(err)
})