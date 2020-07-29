import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Matches = (props) => {
    const { auth } = props;

    if(!auth.uid) return <Redirect to="/"/>
    
    return(
        <div className="flex flex-row items-start justify-between" >
            Games
        </div>
    );
}

const mapStateToProps = ( state ) => { 
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Matches);