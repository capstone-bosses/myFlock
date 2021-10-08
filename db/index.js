const db = require('./db');

const User = require('./models/User')
const Conversation = require('./models/Conversation')
const Message = require('./Message')
//leaving this here for now to think about the feasability of adding activity feed or itinerary items to flock together
// const Activity = require('./Activity')

User.belongsToMany(User, {as: 'contacts', through: 'friendship'})
Conversation.hasMany(User);
User.hasMany(Message)

module.exports = {
    db,
    User,
    Conversation,
    Message,
    //Activity
}
