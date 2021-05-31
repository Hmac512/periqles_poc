/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BadgeEnum = "Robot" | "Storage" | "Vehicle" | "%future added value";
export type FunctionEnum = "AMR_WAREHOUSE" | "STORAGE" | "WAREHOUSE_OF_FUTURE" | "%future added value";
export type OrgEnum = "GeekPlus" | "OTTO" | "Samsung" | "%future added value";
export type AddDeviceInput = {|
  deviceName: string,
  description: string,
  cost: string,
  oem: OrgEnum,
  badges: BadgeEnum,
  functions: FunctionEnum,
  clientMutationId?: ?string,
|};
export type UserProfile_AddUserMutationVariables = {|
  input: AddDeviceInput
|};
export type UserProfile_AddUserMutationResponse = {|
  +addDevice: ?{|
    +deviceId: string,
    +deviceName: string,
    +description: string,
    +cost: string,
    +oem: OrgEnum,
    +badges: BadgeEnum,
    +functions: FunctionEnum,
  |}
|};
export type UserProfile_AddUserMutation = {|
  variables: UserProfile_AddUserMutationVariables,
  response: UserProfile_AddUserMutationResponse,
|};
*/


/*
mutation UserProfile_AddUserMutation(
  $input: AddDeviceInput!
) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddDevicePayload",
    "kind": "LinkedField",
    "name": "addDevice",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deviceId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deviceName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cost",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "oem",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "badges",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "functions",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserProfile_AddUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserProfile_AddUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fbedba542fdb0e06f2f5355366bbfe13",
    "id": null,
    "metadata": {},
    "name": "UserProfile_AddUserMutation",
    "operationKind": "mutation",
    "text": "mutation UserProfile_AddUserMutation(\n  $input: AddDeviceInput!\n) {\n  addDevice(input: $input) {\n    deviceId\n    deviceName\n    description\n    cost\n    oem\n    badges\n    functions\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ea4f92a10b96d5aa7159687a7df36cce';

module.exports = node;
