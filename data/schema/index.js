const {GraphQLObjectType, GraphQLSchema} = require('graphql');
const {nodeField} = require('./nodes.js');
const {DeviceQuery} = require('./queries/demoDeviceQuery.js');
const {AddDeviceMutation} = require('./mutations/AddDeviceMutation.js');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    device: DeviceQuery,
    node: nodeField,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addDevice: AddDeviceMutation,
  },
});

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

module.exports = {schema};
