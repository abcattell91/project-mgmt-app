const mongoose = require('mongoose');

// Mongoose schema - not related to a graphQl schema
// Mongoose layer - schema fields for database collections and ontop is grapQl Api Layers

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
