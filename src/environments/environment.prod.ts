export const environment = {
  production: true,
  auth: {
    clientID: '90mwOOuTP4AV30DBvn4feK2B1ycoWvqV',
    domain: 'dev-dildox8i.eu.auth0.com', // e.g., https://you.auth0.com/
    audience: 'https://final-work-auth/', // e.g., http://localhost:3001
    redirect: 'https://angular-frontend-final-work.herokuapp.com/callback',
    scope: 'openid profile email'
  }
};
