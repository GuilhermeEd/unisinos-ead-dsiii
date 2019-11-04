import Template from '../template/Template';
import LoginPage from '../pages/LoginPage';
import NewUserPage from '../pages/NewUserPage';
import NewProjectPage from '../pages/NewProjectPage';
import DonatePage from '../pages/DonatePage';

export const privatePaths = [
  {
    name: '/new-user',
    component: NewUserPage,
    template: Template
  },
  {
    name: '/new-project',
    component: NewProjectPage,
    template: Template,
    default: true
  }
];

export const notLoggedPaths = [
  {
    name: '/login',
    component: LoginPage
  }
];

export const publicPaths = [
  {
    name: '/donate',
    component: DonatePage,
    default: true
  }
];
