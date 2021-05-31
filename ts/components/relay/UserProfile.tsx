import React, {useState} from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import PeriqlesForm from 'periqles';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/graphql';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('js', js);
interface QueryResponse {
  Device?: Record<string, string | boolean | number>;
}

const UserProfile = (): JSX.Element => {
  const [updated, setUpdate] = useState(false);

  async function fetchQuery(operation, variables): Promise<{}> {
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    });

    return response.json();
  }

  const modernEnvironment: Environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  });

  const mutationGQL = graphql`
    mutation UserProfile_AddUserMutation($input: AddDeviceInput!) {
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

  const specifications: PeriqlesSpecifications = {
    header: 'Add Device',
    fields: {
      oem: {
        element: 'select',
        label: 'OEM',
        options: [
          {label: 'Geek+', value: 'GeekPlus'},
          {label: 'OTTO Motors', value: 'OTTO'},
          {label: 'Samsung', value: 'Samsung'},
        ],
      },
      badges: {
        label: 'Badges',
        element: 'select',
        options: [
          {label: 'Robot', value: 'Robot'},
          {label: 'Storage', value: 'Storage'},
          {label: 'Vehicle', value: 'Vehicle'},
        ],
      },
      functions: {
        label: 'Functions',
        element: 'select',
        options: [
          {label: 'AMRs For Warehouse', value: 'AMR_WAREHOUSE'},
          {label: 'Warehouse of the Future', value: 'WAREHOUSE_OF_FUTURE'},
          {label: 'Warehouse Storage', value: 'STORAGE'},
        ],
      },
    },
  };

  const onSuccess = (response) => {
    setUpdate(!updated);
  };

  const onFailure = (error) => {
    alert(`Problem submitting form: ${error.toString()}`);
  };

  const args = {clientMutationId: '0000'};

  return (
    <div>
      <section className="UserProfile">
          <PeriqlesForm
            environment={modernEnvironment}
            mutationName={'AddDevice'}
            mutationGQL={mutationGQL}
            specifications={specifications}
            args={args}
            callbacks={{onSuccess, onFailure}}
          />
      </section>
    </div>
  );
};

export default UserProfile;
