// signup user
function signup(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(result) {
      //handle then
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

// signin using email and password
function signin(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(result) {
      //handle then
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

// signin using google account
function googlelogin() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

//signin using Google
function fblogin() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

function signout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
}
