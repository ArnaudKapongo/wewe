import {initializeApp} from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const config = {
  apiKey: "AIzaSyAoGLwhHP97JDkSDu6VjUEqlSdppfD8tQQ",
  authDomain: "wewe-2b349.firebaseapp.com",
  projectId: "wewe-2b349",
  storageBucket: "wewe-2b349.appspot.com",
  messagingSenderId: "787136806840",
  appId: "1:787136806840:web:8f14262b4e13cb9757d94d",
  measurementId: "G-W31CLB48JG"
};

const app = initializeApp(config)

export const db = getFirestore(app);
//export default firebase;