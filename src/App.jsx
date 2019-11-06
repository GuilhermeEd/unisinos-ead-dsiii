import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import moment from 'moment';

import store from './store';
import Routes from './routes';

moment.locale('pt_BR');

const App = () => {
  return (
    <ConfigProvider locale={ptBR}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ConfigProvider>
  );
};

export default App;
