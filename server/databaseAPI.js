import Firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBKQllq7AYNe5_Ub_N6Khra3kOlaAe1N1Y",
  authDomain: "thecore-8664c.firebaseapp.com",
  databaseURL: "https://thecore-8664c.firebaseio.com",
  storageBucket: "thecore-8664c.appspot.com",
};
Firebase.initializeApp(config);

const databaseAPI = {
  setUserRatings(username){
    Firebase.database().ref('/' + username).set({username: username})
  },
  getUserProviderHandle(username, provider){
    return Firebase.database().ref('/users/' + username + '/' + provider).once('value');
  },
  getUserTraitify(username, cb){
    Firebase.database().ref('/Users/' + username + '/traitify').once('value').then((snapshot)=>{
      if (snapshot) {
        console.log(snapshot.val());
        cb(snapshot.val());
      }
    })
  },
}

export default databaseAPI
