importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAs3e0bOf0Pv04KALXoiZloFEKtmAOKkOo",
  authDomain: "skfer-tour-bc626.firebaseapp.com",
  databaseURL: "https://skfer-tour-bc626-default-rtdb.firebaseio.com",
  projectId: "skfer-tour-bc626",
  storageBucket: "skfer-tour-bc626.firebasestorage.app",
  messagingSenderId: "511820866221",
  appId: "1:511820866221:web:1a4e649142428187c15c24"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Background message:", payload);
});
