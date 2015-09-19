var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    user_id: Number,
    phone: Number,
    first_name: String,
    last_name: String,
    loan_opportunities: { type : Array , "default" : [] }
});

module.exports = mongoose.model('User', UserSchema);
