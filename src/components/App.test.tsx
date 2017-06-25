import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  function noop() {};
  ReactDOM.render(<App responses={[]} connectToServer={noop} disconnectFromServer={noop} sendToServer={noop} />, div);
});
