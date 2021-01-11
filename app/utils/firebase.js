import firebase from "firebase/app"

const firebaseConfig={

        apiKey: "AIzaSyCwWCSZs8te8VgAQPleVx0mrEOD-KePx5w",
        authDomain: "tenedores-b06b4.firebaseapp.com",
        databaseURL: "https://tenedores-b06b4.firebaseio.com",
        projectId: "tenedores-b06b4",
        storageBucket: "tenedores-b06b4.appspot.com",
        messagingSenderId: "158355073382",
        appId: "1:158355073382:web:d7085c6b4a33818024c0a7"
     
      
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);