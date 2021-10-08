const Sequelize = require('sequelize');
const db = require('../db');

const Message = db.define("Message", {
    sender: {},
    recipients: {},
    textBody: {},
    timeStamp: {},
    wasRead: {},
    wasDeleted: {},
    geoTag: {}
});