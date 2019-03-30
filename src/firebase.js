import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDmlgs94_JCAjeI5EoUdxMh1BtWP6zmhuM",
    authDomain: "mio-project-6d966.firebaseapp.com",
    databaseURL: "https://mio-project-6d966.firebaseio.com",
    projectId: "mio-project-6d966",
    storageBucket: "mio-project-6d966.appspot.com",
    messagingSenderId: "621837700322"
};

app.initializeApp(config);

export default app;