const { Users } = require('../db/models')
const { getRandomUsername  } = require('../utils/username')

async function createAnonUser() {
    const user = await Users.create({   
        username: getRandomUsername()   //the users are created by getRandomUSername() algo from utils.jsS
    })
    return user
}

//so the return is depent on given id there
async function getUserById(id) {
    return await Users.findOne({ where: { id } })  ///without where it will fail in db
}

//aur agar yaha pe username denge toi yaha se username se match karke miljayega
async function getUserByUsername(username) {
    return await Users.findOne({ where: { username } })
}


async function getallUser() {
    let dbusers = await Users.findAll();  //yaha pe Users me findAll() se sare userska data DBusers me store kardiya as an object
   //for (let p of dbusers) {
   //     console.log(p.username)
  // }
    return dbusers;
}


/*async function task() {
    console.log(await createAnonUser())
    console.log('-----------')
    console.log(await createAnonUser())
    console.log('-----------')
    console.log(await createAnonUser())
    console.log('-----------')
    console.log(await createAnonUser())
    console.log('-----------')
    console.log(await createAnonUser())
    console.log('-----------')
    console.log(await createAnonUser())
    console.log('-----------')
   ///await getallUser()
}


task()*/

module.exports = {
    createAnonUser, getUserById, getUserByUsername, getallUser
}