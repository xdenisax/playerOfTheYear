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
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_SUCCESS':
            console.log("signed up successfully");
            return{
                ...state,
                authError:null
            }

        case 'SIGNUP_ERROR':
            console.log("sign up failed");
            return{
                ...state,
                authError: action.err.message
            }

        default:
            return state;

    
    }
}

export default authReducer;