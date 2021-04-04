const { Router } = require('express')
const { findAllPosts,createNewPost } = require('../../controllers/posts')

const route = Router()

route.get('/',async(req,res)=>
{
    const posts = await findAllPosts()   ///phle const posts me sab save kiya fir 
    res.status(200).send(posts)    ///yaha se return kiya
})

///yaha pe post request aayegi ---->localhost:3434/api/posts/ aur yaha data daldenge userId,title,body 
route.post('/',async (req,res)=>
{
    const { userId,title,body} = req.body
    if((!userId) || (!title) || (!body))  ////if anyone is not available
    {
        return res.status(400).send({
            error : 'need userid,title and body properly'
        })
    }
    const post = await createNewPost(userId,title,body)
    res.status(201).send(post)
})

module.exports = {
    postsRoute:route
}