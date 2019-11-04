import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <p>test</p>
    </Provider>
  );
};

export default App;
