const initState = {
    matches:[] 
}

const matchReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'CREATE_MATCH':
            console.log("match created", action.match);
            return state;
        case 'CREATE_MATCH_ERROR':
            console.log("create match error", action.err);
            return state;
        default:
            return state;
    }
}

export default matchReducer;