var mongoose = require('mongoose');

var LoanSchema = new mongoose.Schema({
	user_id: Number,
	amount: Number,
	length: Number,
	funded: {type: Boolean, default: false},
});

module.exports = mongoose.model('Loan', LoanSchema);
