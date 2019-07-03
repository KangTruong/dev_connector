const routes = {
  index: '/',
  login: '/auth/login',
  register: '/auth/register',
  testApi: '/testapi', // use for check how to fetch data in redux-saga

  dashboard: '/dashboard',
}

export const publicPaths = [
  routes.index,
  routes.login,
  routes.register,
  routes.testApi
];

export const preventMemberPaths = [
  routes.index,
  routes.login,
  routes.register,
];

export default routes;