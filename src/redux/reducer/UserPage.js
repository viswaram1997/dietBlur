const initialState={
   AddRestaurant:{
       response:'',
       loading:true
   },
   getRestaurant:{
    response:'',
    loading:true
},
updateRestaurant:{
    response:'',
    loading:true

}
}

export default (state=initialState,action)=>{
    switch(action.type){
    case 'Add_Restaurant':
    return{
        ...state,
        AddRestaurant:{
            response:action.payload,
            loading:false
        }
    }
    case 'Get_Restaurant':
    return{
        ...state,
        getRestaurant:{
            response:action.payload,
            loading:false            

        }
    }
    case 'Update_Restaurant':
    return{
        ...state,
        updateRestaurant:{
            response:action.payload,
            loading:false            

        }
    }
    default:
            return {
                ...state
            }

    }

}