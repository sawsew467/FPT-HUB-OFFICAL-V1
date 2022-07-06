
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

// const navigate = useNavigate();

const firebaseConfig = {
  apiKey: "AIzaSyDT9i8XYQDHpSfQOJzCHsgY9f3stayCDUQ",
  authDomain: "fpt-hub-sign-in.firebaseapp.com",
  projectId: "fpt-hub-sign-in",
  storageBucket: "fpt-hub-sign-in.appspot.com",
  messagingSenderId: "1044833398026",
  appId: "1:1044833398026:web:89fcba25c09f0637cc5ef3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// var emailData;

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      // emailData = email;
    })
    .catch((error) => {
      console.log(error);
    });
};

// export emailData;