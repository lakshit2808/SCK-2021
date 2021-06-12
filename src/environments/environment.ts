
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const url1:string = "https://anshulcustomkicks.com/wp-json/wc/v3"
const authUrl1:string = "https://anshulcustomkicks.com/wp-json/jwt-auth/v1/token"
const tokenVerifyUrl1:string = "https://anshulcustomkicks.com/wp-json/wc/v3/validate"

export const environment = {
  production: false,
  backend_api_url: url1,
  auth_url: authUrl1,
  token_verify_url: tokenVerifyUrl1,
  readOnlyKeys:{
    customer_key: 'ck_2eb90abb3838a6edab4f5f830b9b91796395fc0f',
    customer_secret: 'cs_5231f3a12886953d1481ea1fffbc8917a3960b09'
  },
  writableKey:{
    customer_key: "ck_2eb90abb3838a6edab4f5f830b9b91796395fc0f",
    customer_secret: "cs_5231f3a12886953d1481ea1fffbc8917a3960b09"
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
