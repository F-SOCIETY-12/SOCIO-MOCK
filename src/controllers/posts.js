const { Posts, Users } = require('../db/models')

async function createNewPost(userId, title, body) {    ///yaha pe write-post.js se request ayegi
    const post = await Posts.create({
        title,
        body,
        userId
    })
    return post
}

///yaha niche agar (username) dala to username se search hojayega
////agar yaha (title) dala to title se show hojayega
async function findAllPosts(query) {
const posts = await Posts.findAll(
    {
        include : [Users]
    }
)  ///agar uska naam dhikana jo post kar raha hai (AUTHOR) name 
   ///aur iske ke liye post aur user db me connection neccessary hai
return posts
}

//TESTING OF MAKING POSTS
/*
async function task()
{
    console.log(
        await createNewPost
        (1,
        'this is just a demo-1',
        'body of the post goes here'
        )
        ),
        console.log(
            await createNewPost
            (2,
            'this is just a demo-2',
            'body of the post goes here as well'
            )
            )
            
           const posts = await showAllPosts()
           for (let p of posts)
           {
               console.log(`${p.title}\n author : ${p.user.username} \n${p.body}\n=========\n`)
           }

}

task()*/

module.exports = {
    createNewPost,findAllPosts
}