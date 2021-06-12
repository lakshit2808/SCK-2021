
const url1:string = "https://anshulcustomkicks.com/wp-json/wc/v3"
const authUrl1:string = "https://anshulcustomkicks.com/wp-json/jwt-auth/v1/token"
const tokenVerifyUrl1:string = "https://anshulcustomkicks.com/wp-json/wc/v3/validate"

export const environment = {
  production: true,

  backend_api_url: url1,
  auth_url: authUrl1,
  token_verify_url: tokenVerifyUrl1,
  readOnlyKeys:{
    customer_key: 'ck_2eb90abb3838a6edab4f5f830b9b91796395fc0f',
    customer_secret: 'cs_5231f3a12886953d1481ea1fffbc8917a3960b09'
  },
  writableKey:{
    customer_key: 'ck_2eb90abb3838a6edab4f5f830b9b91796395fc0f',
    customer_secret: 'cs_5231f3a12886953d1481ea1fffbc8917a3960b09'
  }
};
