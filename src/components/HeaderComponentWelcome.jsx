import React, { Component } from 'react';

class HeaderComponentWelcome extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" style={{marginLeft:"520px" }} className="navbar-brand"> Welcome to the dashboard!</a></div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponentWelcome;