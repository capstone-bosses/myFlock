//refer to cody's cafe for the example of self referential firnedship lists
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define("User", {
    userName: {},
    password: {},
    firstName: {},
    lastName: {},
    pronouns: {},
    bio: {},
    email: {},
    imageUrl: {},
    location: {},
    phone: {},
    isVerified: {},
    interests: {},
    //unsure about this one
    friendship: {}

});

