// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api:{
    key: '8a732f489f66fcfb6feee9839dc02d76',
    auth_token_url: 'https://api.themoviedb.org/3/authentication/token/new?api_key=',
    auth_login_url: 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=',
    movies_latest_url: 'https://api.themoviedb.org/3/movie/latest?language=en-US&api_key=',
    movies_top_rated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key='
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
