import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQeApOM3yBBPe7osJlc2TI4xJxl523Yqk",
    databaseURL:"https://triptosters-guide-e9d0a-default-rtdb.firebaseio.com/",
    authDomain: "triptosters-guide-e9d0a.firebaseapp.com",
    projectId: "triptosters-guide-e9d0a",
    storageBucket: "triptosters-guide-e9d0a.appspot.com",
    messagingSenderId: "216892824721",
    appId: "1:216892824721:web:4ea1385784ed070c443330"
  };

  const app = initializeApp(firebaseConfig);
  export const authentication = getAuth(app);