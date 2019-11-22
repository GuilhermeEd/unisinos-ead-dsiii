import React from 'react';

import UsersTable from '../components/tables/UsersTable';

import * as Styled from './styles/Page.styles';

const ManageUsersPage = () => {
  return (
    <Styled.Page>
      <UsersTable />
    </Styled.Page>
  );
};

export default ManageUsersPage;
