import UserService from "../../service/login";

export function SignupUser(email,password,username,mobile,location){
    console.log(email,password,username,mobile,location,"ds");
    return (dispatch) => {
        UserService.SignupUser(email, password,username,mobile,location).then((response)=>{
         
            dispatch({ type: "Signup_User", payload:response})
        }).catch((err)=>{
            console.log("error in login user" , err)
        })
   }
}

export function loginUser(username,password){
   
    return (dispatch) => {
        UserService.LoginUser(username, password).then((response)=>{
            console.log(response,"viswa")
            dispatch({ type: "Login_User", payload: response})
        }).catch((err)=>{
            console.log("error in login user" , err)
        })
   }
}
