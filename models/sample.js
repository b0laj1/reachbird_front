var mongoose = require('mongoose');

// Define our client schema
var Sample = new mongoose.Schema({
    username: String,
    code: String,
    dimensions: mongoose.Schema.Types.Mixed,
    timestamp: Date,
    comments_disabled: Boolean,
    owner: mongoose.Schema.Types.Mixed,
    comments: mongoose.Schema.Types.Mixed,
    hashtag_count : Number,
    caption: String,
    caption_text_only: mongoose.Schema.Types.Mixed,
    link: String,
    likes: mongoose.Schema.Types.Mixed,
    date: String,
    thumbnail_src: String,
    is_video: Boolean,
    id: String,
    main_color: Array,
    main_color_text: String,
    main_color_nearest: String,
    palette_c1: Array,
    palette_c1_text: String,
    palette_c1_nearest: String,
    palette_c2: Array,
    palette_c2_text: String,
    palette_c2_nearest: String,
    palette_c3: Array,
    palette_c3_text: String,
    palette_c3_nearest: String,
    palette_c4: Array,
    palette_c4_text: String,
    palette_c4_nearest: String,
    palette_c5: Array,
    palette_c5_text: String,
    palette_c5_nearest: String,
    palette_c6: Array,
    palette_c6_text: String,
    palette_c6_nearest: String,
    display_src: String,
    timestamp_str: String,
    is_deleted: Boolean,
    caption_lang: mongoose.Schema.Types.Mixed,
    caption_hashtags: mongoose.Schema.Types.Mixed,
    caption_emojis: mongoose.Schema.Types.Mixed,
    image_tags: mongoose.Schema.Types.Mixed,


});


// Export the Mongoose model
module.exports = mongoose.model('Sample', Sample);