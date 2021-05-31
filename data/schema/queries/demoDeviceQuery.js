const {demoGraphQLDevice} = require('../nodes.js');
const {
  Device,
  getLastDeviceOrThrow,
  getAllDevices,
} = require('../../database.js');

const DeviceQuery = {
  type: demoGraphQLDevice,
  resolve: (root) => {

    getAllDevices();
    return getLastDeviceOrThrow();
  },
};

module.exports = {DeviceQuery};
