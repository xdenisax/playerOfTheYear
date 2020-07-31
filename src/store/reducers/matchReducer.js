const initState = {
    matches:[],
    result: ""
}

const matchReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'CREATE_MATCH':
            console.log("match created", action.match);
            return {
                ...state, 
                result: "Match added"
            }
        case 'CREATE_MATCH_ERROR':
            console.log("create match error", action.err);
            return {
                ...state, 
                result: action.err.message
            }
        default:
            return state;
    }
}

export default matchReducer;