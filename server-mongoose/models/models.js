const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mongodb-soloproject');

const dataSchema = new Schema({
  // define schema here

});

const Document = mongoose.model('Data', dataSchema);

module.exports = Document;
