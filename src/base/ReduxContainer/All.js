import React, {Component} from 'react';
import {connect} from "react-redux";

import EntitySelectors from "../EntityContainer/selectors"

class All extends Component {

    render() {

        const {items, isFetched, meta, children} = this.props;

        return children({items, meta, isFetched});
    }
}

const mapStateToProps = () => {
    const getAll = EntitySelectors.getAll();
    return (state, props) => {
        const {items, isFetched, meta} = getAll(state, props);

        return ({items, isFetched, meta})
    }
};

export default connect(mapStateToProps)(All);
