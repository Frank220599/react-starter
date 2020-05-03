import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import EntityActions from "../actions";
import EntitySelectors from "../selectors"
import isEqual from "lodash/isEqual"

class One extends Component {
    componentDidMount() {
        const {entity, id, name, url, params} = this.props;
        this.Fetch(entity, id, name, url, params);
    }

    componentDidUpdate(prevProps) {
        const {entity, id, name, url, params} = this.props;
        if (!isEqual(id, prevProps.id) || !isEqual(url, prevProps.url) || !isEqual(params, prevProps.params)) {
            this.Fetch(entity, id, name, url, params);
        }
    }

    Fetch = (entity, id, name, url, {fields = [], include = []} = {}) => {
        const {FetchOne} = this.props;
        FetchOne({entity, id, name, url, params: {fields, include}});
    };

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

const mapDispatchToProps = dispatch => bindActionCreators({
    FetchOne: EntityActions.FetchOne.request
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(One);
