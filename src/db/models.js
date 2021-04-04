const Sequelize  = require('sequelize')

const db = new Sequelize({
    dialect : 'mysql',
    database : '25march',
    username : '25user',
    password : '25pass',
    host : 'localhost',
})

const COL_ID_DEF = {
    type : Sequelize.DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
}

const COL_USERNAME_DEF = {
    type : Sequelize.DataTypes.STRING(30),
    unique : true,
    allowNull : false
}
const COL_TITLE_DEF = {
  type : Sequelize.DataTypes.STRING(140),
  allowNull : false
}


///define objects so we can insert by use of them
const Users = db.define('user',{
id : COL_ID_DEF,
username : COL_USERNAME_DEF
})

const Posts = db.define('post',{
id : COL_ID_DEF,
title : COL_TITLE_DEF,
body : {
    type : Sequelize.DataTypes.TEXT,
    allowNull : false
}
})


const Comments = db.define('comment',{
id : COL_ID_DEF,
title : COL_TITLE_DEF,
body : {
    type : Sequelize.DataTypes.TEXT('tiny')
}
})

///now to create relatioshipsbetween tables
Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Users)


module.exports ={
    db,Users,Posts,Comments
}