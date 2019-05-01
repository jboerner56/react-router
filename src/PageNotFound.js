import React from 'react';
import {
    Redirect,
    Link
    } from "react-router-dom";
class PageNotFound extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showRedirect: false
        };
    }
    componentDidMount () {
        setTimeout(() => {
            this.setState({
                showRedirect: true
            });
        }, 3000);
    }
    render() {
        return (
            <div>
                <h2>Page not found</h2>
                <Link to="/">
                Click here to go home. or be redirected against your will
                </Link>
                {this.state.showRedirect ? <Redirect to="/"/> : null }
            </div>
        )
    }
}

export default PageNotFound;