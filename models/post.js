var mongoose = require('mongoose');

// Define our client schema
var Post = new mongoose.Schema({
    username: String,
    code: String,
    dimensions: mongoose.Schema.Types.Mixed,
    timestamp: Date,
    comments_disabled: Boolean,
    owner: mongoose.Schema.Types.Mixed,
    comments: mongoose.Schema.Types.Mixed,
    caption: String,
    caption_text_only: mongoose.Schema.Types.Mixed,
    link: String,
    likes: mongoose.Schema.Types.Mixed,
    date: String,
    thumbnail_src: String,
    is_video: Boolean,
    id: String,
    display_src: String,
    timestamp_str: String,
    is_deleted: Boolean,
    caption_lang: String,
    caption_hashtags: String,
    caption_emojis: String,
    image_tags: mongoose.Schema.Types.Mixed
});


// Export the Mongoose model
module.exports = mongoose.model('Post', Post);