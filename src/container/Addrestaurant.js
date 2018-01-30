import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import addRestaurant from "../pages/AddRestaurant";
import { AddRestaurant ,getRestaurant ,updateRestaurant} from "../redux/action/userpage";



const mapStateToProps = (state) => {
    return({
     
        addRestaurantDetails:state.UserPage.AddRestaurant,
        restaurantDetails:state.UserPage.getRestaurant,
    })
    
    
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        "addRestaurant": AddRestaurant,
        "getRestaurant":getRestaurant,
        "updateRestaurant":updateRestaurant
         
     },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(addRestaurant);