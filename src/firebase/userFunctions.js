import {db} from './firebaseConfig';

export const addUser = (user) => {
    console.log(user)
    db.collection("users").doc(user.email).set({
        email: user.email,
        password: user.password
    })
    .then(function(docRef) {
        console.log("Document written", );
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


