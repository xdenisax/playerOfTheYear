export const createGame = ( game ) =>{
    return( dispatch, getState, {getFirebase, getFirestore} ) => {
        const firestore = getFirestore();
        const userID = getState().firebase.auth.uid;

        firestore.collection("games").where("name", "==", game.name).get()
        .then( (snapshot) => {
            snapshot.forEach( (doc) => {
                if( doc.data().name ) throw new Error("Game already exists");
            });
        }).then( () => {
            return firestore.collection("games").add({
                ...game,
                addedBy: userID,
                date: firestore.Timestamp.fromDate(new Date())
            });
        }).then( () => {
            dispatch({type:'CREATE_GAME', game: game});
        }).catch( (error) => {
            dispatch({type:'CREATE_GAME_ERROR', error: error});
        });
    }
}