const { Router } = require('express')
const { createAnonUser,getUserById,getUserByUsername,getallUser } = require('../../controllers/users')

const route = Router()

/////-------------------to get all users--------------------------/////////
route.get('/allusers',async (req,res)=>
{
    let allusers = await getallUser()
    
    for (let u of allusers)
    {
        console.log(u.username,u.id)
        console.log("+++++++++++++++++")
    }
    res.status(200).send(allusers)     
})

///////-------------------to get specific user-----------------------//////
route.get('/:id',async (req,res)=>
{
    let user;
    if(isNaN(parseInt(req.params.id)))
    {
    user = await getUserByUsername(req.params.id)
    }
    else{
    user = await getUserById(req.params.id)
    }
    ///ab yaha se data bhejne ka kam if agar user exists karta hai ya nahi uske base pe 
    if(user)
    {
        res.status(200).send(user)    ///200->request succeded and 
    }
    else{
        res.status(404).send({
            error : 'no such user or id exits'
        })
    }
})

//-------------------to create a user-------------------////
route.post('/',async(req,res)=>    /////localhost:3434/api/users on post req it will create a new user everytime
{
    const user = await createAnonUser()   ////ye call karenge tabhi to user banega database me
    res.status(201).send(user)
})

module.exports = {
    usersRoute : route
}