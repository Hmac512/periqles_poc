//DEMO USER CLASSES, FUNCTIONS AND INFO

// DemoUser class:
class Device {
  constructor(deviceId, deviceName, description, cost, oem, badges, functions) {
    this.deviceId = deviceId;
    this.deviceName = deviceName;
    this.description = description;
    this.cost = cost;
    this.oem = oem;
    this.badges = badges;
    this.functions = functions;
  }
}

// Mock database seeded with initial user
const demoDevicesById = new Map([
  [0, new Device('0', 'OTTO 100', 'Dank AMR', 250.00, 'OTTO', 'Robot', 'AMR_WAREHOUSE')],
]);

// Seed initial user
let nextDeviceId = 1;

function getDemoDevice(deviceId) {
  return demoDevicesById.get(deviceId);
}
function getDemoDeviceOrThrow(deviceId) {
  const demoDevice = getDemoDevice(deviceId);
  if (!demoDevice) {
    throw new Error(`Invariant exception, DemoDevice ${deviceId} not found`);
  }

  return demoDevice;
}

function getLastDemoDeviceOrThrow() {
  let lastDemoDevice;
  const demoDeviceIterator = demoDevicesById[Symbol.iterator]();

  for (const deviceItem of demoDeviceIterator) {
    lastDemoDevice = deviceItem[1];
  }

  return lastDemoDevice;
}

function getAllDevices() {
  let demoDeviceList = [];
  const demoDevicesIterator = demoDevicesById[Symbol.iterator]();

  for (const deviceItem of demoDevicesIterator) {
    demoDeviceList.push(deviceItem[1]);
  }

  return demoDeviceList;
}

// addUser function
function addDevice({
  deviceName,
  description,
  cost,
  oem,
  badges,
  functions,
}) {
  const newDevice = new Device(
    `${nextDeviceId++}`,
    deviceName,
    description,
    cost,
    oem,
    badges,
    functions,
  );
  demoDevicesById.set(newDevice.deviceId, newDevice);
  return newDevice;
}

module.exports = {
  Device,
  getDemoDeviceOrThrow,
  getLastDemoDeviceOrThrow,
  getAllDevices,
  addDevice,
};
