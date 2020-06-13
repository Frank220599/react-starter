import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Authenticate} from "./store/actions/system";

class App extends Component {
    componentDidMount(prevProps) {
        const {user, Authenticate} = this.props;
        if (user.token === null || prevProps.user.token !== user.token) {
            Authenticate();
        }
    }

    render() {
        return (
            <div className={'body'}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.system.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
    Authenticate
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App)
