import UserClass from './UserClass.js'
import React from 'react';

class AboutComponent extends React.Component{
    constructor(){
        super();
    }
    render () {
        return (
            <div>
                <h1> About us Our Team</h1>
                <h2> This is the About page</h2>
                <UserClass />
            </div>  
        )
    }
}

export default AboutComponent;