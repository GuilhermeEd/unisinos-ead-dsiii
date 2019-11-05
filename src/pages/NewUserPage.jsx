import React from 'react';
import { Tabs } from 'antd';

import DonatorForm from '../components/forms/DonatorForm';
import InstitutionForm from '../components/forms/InstitutionForm';

import * as Styled from './styles/Page.styles';

const NewUserPage = () => {
  return (
    <Styled.Page>
      <Tabs>
        <Tabs.TabPane tab="Cadastrar Doador" key="1">
          <DonatorForm />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Cadastrar Instituição" key="2">
          <InstitutionForm />
        </Tabs.TabPane>
      </Tabs>
    </Styled.Page>
  );
};

export default NewUserPage;
