//var sequelize = require('sequelize') ;
var Sequelize = require('sequelize');;
var sequelize = new Sequelize('loginapp', 'purnima', 'Genero20!7', {
    port: 3306,
    dialect: 'mysql'
});
var bcrypt = require('bcrypt-nodejs');
var localUserSchema = sequelize.define('user', {
    "email": Sequelize.STRING,
    "password": Sequelize.STRING
});

// "local"            : {
    //},
    // "facebook"         : {
    // 			type : 'object'
    //     "id"           : Sequelize.STRING ,
    //     "token"        : Sequelize.STRING ,
    //     "email"        : Sequelize.STRING ,
    //     "name"         : Sequelize.STRING
    // },
    // "twitter"          : {
    // 			type : 'object'
    //     "id"           : Sequelize.STRING ,
    //     "token"        : Sequelize.STRING ,
    //     "displayName"  : Sequelize.STRING ,
    //     "username"     : Sequelize.STRING
    // },
    // "google"           : {
    // 			type : 'object'
    // 			"id"           : Sequelize.STRING ,
    //     "token"        : Sequelize.STRING ,
    //     "email"        : Sequelize.STRING ,
    //     "name"         : Sequelize.STRING
    // }

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};
