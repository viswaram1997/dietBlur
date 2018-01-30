import UserPage from "../../service/UserPage";

export function AddRestaurant( restaurantName,restaurantInfo,area, city, state,contact,address,username){

    return (dispatch) => {
        UserPage.AddRestaurant( restaurantName,restaurantInfo,area, city, state,contact,address,username).then((response)=>{
         
            dispatch({ type: "Add_Restaurant", payload:response})
        }).catch((err)=>{
            console.log("error in Add_Restaurant" , err)
        })
   }
}
export function getRestaurant( username){

    return (dispatch) => {
        UserPage.getRestaurant(username).then((response)=>{
         
            dispatch({ type: "Get_Restaurant", payload:response.doc})
        }).catch((err)=>{
            console.log("error in Add_Restaurant" , err)
        })
   }
}
export function updateRestaurant( estaurantName,restaurantInfo,area, city, state,contact,address,username){

    return (dispatch) => {
        UserPage.updateRestaurant(estaurantName,restaurantInfo,area, city, state,contact,address,username).then((response)=>{
         
            dispatch({ type: "Update_Restaurant", payload:response.update})
        }).catch((err)=>{
            console.log("error in Add_Restaurant" , err)
        })
   }
}