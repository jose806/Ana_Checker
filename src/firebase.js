import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDo0sWDK9PIxvfbcCb6z_PO23ktq002SN8",
  authDomain: "attendee-tracker-308cc.firebaseapp.com",
  projectId: "attendee-tracker-308cc",
  storageBucket: "attendee-tracker-308cc.appspot.com",
  messagingSenderId: "299688955142",
  appId: "1:299688955142:web:93dac3e9ff8bdc69572287",
  measurementId: "G-3Y19EMGGMD",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
