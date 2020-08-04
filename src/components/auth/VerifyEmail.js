import React from 'react';
import { connect } from 'react-redux';


const VerifyEmail = () => {

    return(
        <div className="flex flex-column items-end w-100 " >
            <div className="formInputs fl w-25 flex flex-column items-center ma6 mt1 transparentBG br3 pa3 grow shadow-5 bw"> 
                <p className="f3 montSerrat greenText ma0 pa1">Email verification</p>
                <p className="f4 dosis pink-dark-text ma0 pa1">Please, check your email for verification!</p>
            </div>
        </div>
        
    );
    
}

const mapStateToProps = ( state ) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps) (VerifyEmail);