const initState = {
    authError: null
}

const authReducer = (state = initState, action ) => {
    switch(action.type){
        case 'PASSWORDS_MATCH_FAILED':
            console.log('Matching passwords failed.')
            return {
                ...state,
                authError: "Passwords don't match."
            }

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
            return{
                ...state,
                authError: action.err.message
            }

        case 'PASSWORD_UPDATED':
            console.log("Password updated.")
            return{
                ...state,
                authError: null
            }

        case 'PASSWORD_UPDATE_ERROR':
            console.log("Password error.")
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state;

    
    }
}

export default authReducer;