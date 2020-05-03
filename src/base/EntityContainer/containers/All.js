import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import EntityActions from "../actions";
import EntitySelectors from "../selectors"
import isEqual from "lodash/isEqual"

class All extends Component {
    componentDidMount() {
        const {name, entity, url, params, FetchAll, appendIds} = this.props;
        this.Fetch(entity, name, url, params, appendIds );
    }

    componentDidUpdate(prevProps) {
        const {entity, name, url, params, appendIds} = this.props;
        if (!isEqual(params, prevProps.params)) {
            this.Fetch(entity, name, url, params, appendIds);
        }
    }


    Fetch = (entity, name, url, {page = 1, limit = 50, sort = "-id", fields = [], include = [], filter = [], extra = {}} = {}, appendIds = false) => {
        const {FetchAll} = this.props;
        FetchAll({
            entity,
            name,
            url,
            params: {page, limit, sort, fields, include, filter, extra},
            appendIds
        });
    };

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

const mapDispatchToProps = dispatch => bindActionCreators({
    FetchAll: EntityActions.FetchAll.request
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(All);
