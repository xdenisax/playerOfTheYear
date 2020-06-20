import {db} from './firebaseConfig';

export const addUser = (user) => {
    let severity = "";
    db
    .collection("users")
    .doc(user.email)
    .set({
        email: user.email,
        password: user.password
    })
    .then(function(docRef) {
        severity = "success";
    })
    .catch(function(error) {
        severity = "error";
    });
    return severity;
}


