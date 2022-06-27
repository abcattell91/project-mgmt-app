const mongoose = require('mongoose');

// Mongoose schema - not related to a graphQl schema
// Mongoose layer - schema fields for database collections and ontop is grapQl Api Layers

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  }
});

module.exports = mongoose.model('Client', ClientSchema);
