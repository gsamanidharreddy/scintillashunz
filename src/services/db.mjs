import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

let db = false;

export const getDb = () => {
    if(!db){
        const firebaseConfig = {
            apiKey: "AIzaSyByUFIqz0kluQZafU8NecoXjfZwvUYOhGY",
            authDomain: "sintillashunz-vnr.firebaseapp.com",
            databaseURL: "https://sintillashunz-vnr-default-rtdb.firebaseio.com",
            projectId: "sintillashunz-vnr",
            storageBucket: "sintillashunz-vnr.appspot.com",
            messagingSenderId: "99254509445",
            appId: "1:99254509445:web:c17143bef002d2a04ceeec",
            measurementId: "G-FSWET2TCT9"
        }

        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}