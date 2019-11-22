import Template from '../template/Template';
// import LoginPage from '../pages/LoginPage';
import NewUserPage from '../pages/NewUserPage';
import ManageProjectsPage from '../pages/ManageProjectsPage';
import ManageUsersPage from '../pages/ManageUsersPage';
import DonatePage from '../pages/DonatePage';

export const adminPaths = [
  {
    name: '/manage-projects',
    component: ManageProjectsPage,
    template: Template,
    default: true
  },
  {
    name: '/manage-users',
    component: ManageUsersPage,
    template: Template
  }
];

export const institutionPaths = [
  {
    name: '/manage-projects',
    component: ManageProjectsPage,
    template: Template
  }
];

export const donatorPaths = [
  {
    name: '/donate',
    component: DonatePage,
    template: Template
  }
];

export const publicPaths = [
  // {
  //   name: '/login',
  //   component: LoginPage,
  //   default: true
  // }
  {
    name: '/new-user',
    component: NewUserPage,
    template: Template,
    default: true
  }
];
