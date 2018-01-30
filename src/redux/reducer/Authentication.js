const initialState={
    Login:{
        response:""
    },
    SignUp:{
        response:""

    },
    ForgotPassword:{
        response:""

    },
    ResetPassword:{
        response:""

    }
}

export default (state=initialState,action)=>{
    switch(action.type){
    case 'Login_User':
    return{
        ...state,
        Login:{
            response:action.payload.Userexist
        }
    }
    case 'Signup_User':
    return {
        ...state,
        SignUp:{
            response:action.payload
        }
    }
    case 'ResetPassword':
    return {
        ...state,
        SignUp:{
            response:action.payload
        }
    }
    case 'ForgotPassword':
    return {
        ...state,
        SignUp:{
            response:action.payload
        }
    }
    default:
            return {
                ...state
            }

    }

}