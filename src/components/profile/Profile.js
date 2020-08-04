import React, { Component } from 'react';
import './Profile.css'
class Profile extends Component{
    render(){
        const imageLink = `https://images.unsplash.com/photo-1544946632-b73cacef16ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80`;
        return(
            <div className="centerContainerOverride">
                <div className="banner"></div>
                <h1>Profile </h1>
            </div>
            
        );
    }
}

export default Profile;