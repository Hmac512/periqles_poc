const graphqlRelay = require('graphql-relay');
const graphql = require('graphql');
const {BadgeEnum, FunctionEnum, OrgEnum} = require('../nodes.js');
const {addDevice, getDemoDeviceOrThrow} = require('../../database.js');

const {mutationWithClientMutationId} = graphqlRelay;
const {GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLFloat} = graphql;

const AddDeviceMutation = mutationWithClientMutationId({
  name: 'AddDevice',
  inputFields: {
    deviceName: {type: new GraphQLNonNull(GraphQLString)},
    description: {type: new GraphQLNonNull(GraphQLString)},
    cost: {type: new GraphQLNonNull(GraphQLString)},
    oem: {type: new GraphQLNonNull(OrgEnum)},
    badges: {type: new GraphQLNonNull(BadgeEnum)},
    functions: {type: new GraphQLNonNull(FunctionEnum)},
  },
  outputFields: {
    deviceId: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({deviceId}) => deviceId,
    },
    deviceName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({deviceName}) => deviceName,
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({description}) => description,
    },
    cost: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({cost}) => cost,
    },
    oem: {
      type: new GraphQLNonNull(OrgEnum),
      resolve: ({oem}) => oem,
    },
    badges: {
      type: new GraphQLNonNull(BadgeEnum),
      resolve: ({badges}) => badges,
    },
    functions: {
      type: new GraphQLNonNull(FunctionEnum),
      resolve: ({functions}) => functions,
    },
  },
  mutateAndGetPayload: (input) => {
    const newDevice = addDevice(input);
    return newDevice;
  },
});

module.exports = {AddDeviceMutation};
