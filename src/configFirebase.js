const admin = require("firebase-admin");
const firebase = require('firebase')

const serviceAccount = require("./proyectoweb28092020-firebase-adminsdk-ar7ff-1a7d48c8bb.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://proyectoweb28092020.firebaseio.com"
});

var firebaseConfig = {
    apiKey: "AIzaSyDd1Ep-qIx-Af1NALYOGTzllHd_q00QgJs",
    authDomain: "proyectoweb28092020.firebaseapp.com",
    databaseURL: "https://proyectoweb28092020.firebaseio.com",
    projectId: "proyectoweb28092020",
    storageBucket: "proyectoweb28092020.appspot.com",
    messagingSenderId: "374177471676",
    appId: "1:374177471676:web:cdaf143fca02c35bc204b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = { admin, firebase };