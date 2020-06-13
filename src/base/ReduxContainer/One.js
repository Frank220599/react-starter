import React, {Component} from 'react';
import {connect} from "react-redux";

import EntitySelectors from "../EntityContainer/selectors"

class One extends Component {

    render() {

        const {item, isFetched, children} = this.props;

        return children({item, isFetched});
    }
}

const mapStateToProps = (state) => {
    const getOne = EntitySelectors.getOne();
    return (state, props) => {
        const {item, isFetched} = getOne(state, props);

        return ({item, isFetched})
    }
};


export default connect(mapStateToProps)(One);
