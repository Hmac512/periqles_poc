import {commitMutation, graphql} from 'react-relay';

const mutation = graphql`
  mutation AddDeviceMutation($input: AddDeviceInput!) {
    addDevice(input: $input) {
      deviceId
      deviceName
      description
      cost
      oem
      badges
      functions
    }
  }
`;

let tempID = 0;

function commit(
  environment,
  deviceName,
  description,
  cost,
  oem,
  badges,
  functions,
) {
  const input = {
    deviceName,
    description,
    cost,
    oem,
    badges,
    functions,
    clientMutationId: `${tempID++}`,
  };

  return commitMutation(environment, {
    mutation,
    variables: {
      input,
    },
    updater: (store) => {
      const payload = store.getRootField('AddDevice');
      const newDeviceId = payload.getValue('deviceId');
      const newDevicename = payload.getValue('deviceName');
      const newDescription = payload.getValue('description');
      const newCost = payload.getValue('cost');
      const newOEM = payload.getValue('oem');
      const newBadges = payload.getValue('badges');
      const newFunctions = payload.getValue('functions');
    },
  });
}

export default {commit};
