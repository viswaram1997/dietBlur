import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Authentication from "../pages/Authentication";
import {loginUser ,SignupUser} from "../redux/action/user"



const mapStateToProps = (state) => {
    return({
        LoginVerification:state.Authentication.Login.response
    })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       "loginUser":loginUser,
       "SignupUser":SignupUser
        
    },dispatch)

    
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);