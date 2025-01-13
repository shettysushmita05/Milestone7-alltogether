// Identity pool ID: ap-south-1:f509a0a5-ef78-4a16-b010-9f4983e47c39
// User pool ID: 
// Client ID: 

// import { Amplify } from "aws-amplify";

// const awsConfig = {
//     Auth: {
//       region: 'ap-south-1',
//       userPoolId:'ap-south-1_rUMoqED0F',
//       userPoolWebClientId: '510hq9tg47080tq23usl1irg8i',
//     //   identityPoolId: 'ap-south-1:f509a0a5-ef78-4a16-b010-9f4983e47c39',
//     },
//     Analytics: {
//       disabled: true,
//     },
//   };
// //   Amplify.configure(awsConfig);
//   export default awsConfig;










// const awsConfig = {
//     Auth: {
//       region: 'ap-south-1',
//       userPoolId: 'ap-south-1_rUMoqED0F',
//       userPoolClientId: '510hq9tg47080tq23usl1irg8i',
//       mandatorySignIn: true,
//       signUpVerificationMethod: 'code'
//     }
//   };
  
//   export default awsConfig;












// const awsConfig = {
//   Auth: {
// Cognito:{
//     region: 'us-east-1',
//     userPoolId: 'us-east-1_OkPK3BVYB',
//     allowGuestAccess: true,  // Enable unauthenticated access,
//     userPoolClientId: '7bcp5nca8n00ng0mih5o4ioatk',
//     loginWith: { // Optional
//       oauth: {
//         domain: 'https://reactappauth.auth.us-east-1.amazoncognito.com',
//         scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
//         redirectSignIn: ['http://localhost:3000/'],
//         redirectSignOut: ['http://localhost:3000/',],
//         responseType: 'code',
//       },
//       username: 'false',
//       email: 'false', // Optional
//       phone: 'false', // Optional
//     }
//   }}};
  


 
// export default awsConfig





const awsConfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_OkPK3BVYB',
    userPoolWebClientId: '7bcp5nca8n00ng0mih5o4ioatk',
    // authenticationFlowType: 'USER_PASSWORD_AUTH', // Optional
  },
};
export default awsConfig;





