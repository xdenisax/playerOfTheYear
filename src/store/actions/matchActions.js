export const createMatch = (match) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const userID = getState().firebase.auth.uid;

        try{
            if(match.game && match.players && match.winner){
                firestore.collection('matches').add({
                    ...match,
                    addedBy: userID,
                    date: firestore.Timestamp.fromDate(new Date())
                })
                .then( () => {
                    return firestore.collection('stats').doc(match.winner)
                })
                .then( () =>{
                    dispatch({type: 'CREATE_MATCH', match: match});
                })
                .catch( (err) => {
                    dispatch({type: 'CREATE_MATCH_ERROR', err: err});
                })
            }else{
                throw new Error("Fill all fields.");
            }
        }catch(err) {
            dispatch({type: 'CREATE_MATCH_ERROR', err});
        }
        

        
    }
}