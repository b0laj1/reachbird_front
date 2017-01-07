var mongoose = require('mongoose');

// Define our client schema
var Profile = new mongoose.Schema({
    followed_by: mongoose.Schema.Types.Mixed
});


// Export the Mongoose model
module.exports = mongoose.model('Profile', Profile);