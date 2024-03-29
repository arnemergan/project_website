// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientID: '90mwOOuTP4AV30DBvn4feK2B1ycoWvqV',
    domain: 'dev-dildox8i.eu.auth0.com', // e.g., https://you.auth0.com/
    audience: 'https://final-work-auth/', // e.g., https://angular-frontend-final-work.herokuapp.com/callback
    redirect: 'https://angular-frontend-final-work.herokuapp.com/callback',
    scope: 'openid profile email'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
