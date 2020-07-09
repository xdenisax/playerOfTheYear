const initState = {
    authError: null
}

const authReducer = (state = initState, action ) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('logg in failed')
            return {
                ...state,
                authError: 'Login failed.'
            }

        case 'LOGIN_SUCCESS':
            console.log('logging successfully')
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signout successfully');
            return state;
        default:
            return state;
    }
}

export default authReducer;