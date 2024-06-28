const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: Boolean
});

module.exports = mongoose.model('Task', taskSchema);