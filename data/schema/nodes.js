const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLEnumType,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');
const {fromGlobalId, globalIdField, nodeDefinitions} = require('graphql-relay');
const {Device, getLastDemoDeviceOrThrow} = require('../database.js');

const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'Device') {
      return getLastDemoDeviceOrThrow();
    }
    return null;
  },
  (obj) => {
    if (obj instanceof Device) {
      return obj;
    }

    return null;
  },
);

const OrgEnum = new GraphQLEnumType({
  name: 'OrgEnum',
  values: {
    GeekPlus: {
      value: 'Geek+',
    },
    OTTO: {
      value: 'OTTO Motors',
    },
    Samsung: {
      value: 'Samsung',
    },
  },
});

const BadgeEnum = new GraphQLEnumType({
  name: 'BadgeEnum',
  values: {
    Robot: {
      value: 'Robot',
    },
    Storage: {
      value: 'Storage',
    },
    Vehicle: {
      value: 'Vehicle',
    },
  },
});

const FunctionEnum = new GraphQLEnumType({
  name: 'FunctionEnum',
  values: {
    AMR_WAREHOUSE: {
      value: 'AMRs For Warehouse',
    },
    WAREHOUSE_OF_FUTURE: {
      value: 'Warehouse of the Future',
    },
    STORAGE: {
      value: 'Warehouse Storage',
    },
  },
});



const demoGraphQLDevice = new GraphQLObjectType({
  name: 'Device',
  fields: {
    id: globalIdField('Device'),
    deviceId: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (device) => device.deviceId,
    },
    deviceName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (device) => device.deviceName,
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (device) => device.description,
    },
    cost: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: (device) => device.cost,
    },
    oem: {
      type: new GraphQLNonNull(OrgEnum),
      resolve: (device) => device.oem,
    },
    badges: {
      type: new GraphQLNonNull(BadgeEnum),
      resolve: (device) => device.badges,
    },
    functions: {
      type: new GraphQLNonNull(FunctionEnum),
      resolve: (device) => device.functions,
    },
  },
});

module.exports = {nodeField, demoGraphQLDevice, OrgEnum, BadgeEnum, FunctionEnum};
