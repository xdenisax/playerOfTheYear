export const passwordsCheckError = (password, confirmedPassword) =>{ 
    return (dispatch) => {
        if( password !== confirmedPassword )
            dispatch( {type: 'PASSWORDS_MATCH_FAILED'});
    } 
}

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then( () => {
            dispatch( {type: 'LOGIN_SUCCESS'});
        }).catch( (err) => {
            dispatch( {type: 'LOGIN_ERROR', err: err });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then( () => {
            dispatch( {type: 'SIGNOUT_SUCCESS' });
        })
    } 
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firestore.collection("users").where("alias", "==", newUser.alias).get()
        .then( (snapshot) => {
            snapshot.forEach( (doc) => {
                if( doc.data().alias ) throw new Error("Alias already exists");
            });
        })
        .then( () => {
            return firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            )}
        ).then( response => {
            return firestore.collection('users').doc(response.user.uid).set({
                alias: newUser.alias, 
                email: newUser.email
            });
        }).then( () => {
            dispatch({ type: 'SIGNUP_SUCCESS'});
        }).catch( (err) => {
            dispatch({ type: 'SIGNUP_ERROR', err});
        });

        
    }
}