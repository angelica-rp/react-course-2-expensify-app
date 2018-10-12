import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLoginGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginFacebook = () => {
    return () => {
      return firebase.auth().signInWithPopup(facebookAuthProvider)
        .catch((error) => {
          if (error.code === 'auth/account-exists-with-different-credential') {
            console.log('error', error);
            const pendingCred = error.credential;
            //fetchSignInMethodsForEmail /fetchProvidersForEmail
            return firebase.auth().fetchSignInMethodsForEmail(error.email).then((providers) => {
                console.log('providers:', providers);
                if (providers[0] === 'google.com') {
                    console.log('signinRedirect:');
                return firebase.auth().signInWithRedirect(googleAuthProvider).then((result) => {
                    return result.user;
                  });
                }
              })
              .then((user) => {
                console.log('linked:', pendingCred);
                return user.linkWithCredential(pendingCred);
              });
          }
          throw error;
        });
    };
  };



// export const startLoginFacebook = () => {
//     return () => {
//         const auth = firebase.auth();
//         return firebase.auth().signInWithPopup(facebookAuthProvider).catch((error) => {
//             // An error happened.
//             console.log('dentro del catch');

//             if (error.code === 'auth/account-exists-with-different-credential') {
//               // Step 2.
//               // User's email already exists.
//               // The pending Facebook credential.
//               console.log('error code auth/account-exists-with-different-credential');

//               var pendingCred = error.credential;
//               // The provider account's email address.
//               var email = error.email;
//               // Get sign-in methods for this email.
//               auth.fetchSignInMethodsForEmail(email).then((methods) => {
//                 console.log('email:',email);
//                 console.log('methods:',methods);
//                 // Step 3.
//                 // If the user has several sign-in methods,
//                 // the first method in the list will be the "recommended" method to use.
//                 if (methods[0] === 'google.com') { //password

// // era de otro ejemplo tiene que estar authenticated para que sirva
// //                auth.currentUser.linkWithRedirect(facebookAuthProvider);
//                   // Asks the user his password.
//                   // In real scenario, you should handle this asynchronously.
//                   firebase.auth().signInWithPopup(facebookAuthProvider).then((auth) => {
//                     console.log('auth', auth);
//                     auth.currentUser.linkWithRedirect(facebookAuthProvider).then((result) => {
//                         // Accounts successfully linked.
//                         var credential = result.credential;
//                         var user = result.user;
//                         console.log('linked', user, credential);
//                         // ...
//                       }).catch(function(error) {
//                         // Handle Errors here.
//                         // ...
//                       });


//                     return;
//                   }); 
//                 }
//               });
//             }
//           });
//         ;
//     };
// };

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
