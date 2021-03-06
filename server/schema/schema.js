const { projects, clients } = require('../sampleData');

const Project = require('../models/Project');
const Client = require('../models/Client');

const { GraphQLSchema,
        GraphQLObjectType,
        GraphQLList,
        GraphQLID,
        GraphQLString,
    } = require('graphql');

// Projects
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: {type: GraphQLString },
    description: {type: GraphQLString },
    status: {type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return client.findById(parent.clientId);
      },
    },
  }),
});

// Client Type
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: {type: GraphQLString },
    email: {type: GraphQLString },
    phone: {type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      }
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      }
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return client.find();
      }
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})
