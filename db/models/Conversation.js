const Sequelize = require('sequelize');
const db = require('../db');

const Conversation = db.define("Conversation", {
    title: {},
    id: {},
    messages: {},
    participants: {},
});