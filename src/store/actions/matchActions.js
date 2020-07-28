export const createMatch = (match) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const userID = getState().firebase.auth.uid;

        firestore.collection('matches').add({
            ...match,
            addedBy: userID,
            date: firestore.Timestamp.fromDate(new Date())
        })
        .then( () =>{
            dispatch({type: 'CREATE_MATCH', match: match});
        })
        .catch( (err) => {
            dispatch({type: 'CREATE_MATCH_ERROR', err: err});
        })
    }
}