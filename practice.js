const firebaseConfig = {
  apiKey: "AIzaSyDmYvNNgrvQI2k3Ey13gN9h3mdCdBq30c4",
  authDomain: "kwitter-5b74d.firebaseapp.com",
  databaseURL: "https://kwitter-5b74d-default-rtdb.firebaseio.com",
  projectId: "kwitter-5b74d",
  storageBucket: "kwitter-5b74d.appspot.com",
  messagingSenderId: "757676048212",
  appId: "1:757676048212:web:af236b1e938cfb8bb412c1"
};

firebase.initializeApp(firebaseConfig);


/* Adicionar a função addUser() */
function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });
}
