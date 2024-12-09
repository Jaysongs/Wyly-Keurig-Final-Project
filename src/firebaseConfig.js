import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQgWy3s4LBQEg5zn75oNo897358ZL6iL4",
  authDomain: "coffeemakers-58e57.firebaseapp.com",
  projectId: "coffeemakers-58e57",
  storageBucket: "coffeemakers-58e57.firebasestorage.app",
  messagingSenderId: "609939335006",
  appId: "1:609939335006:web:2817a549ea7e038e7851cf"
};

export const app = initializeApp(firebaseConfig);