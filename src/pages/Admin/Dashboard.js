import React from 'react';
import {NavLink} from "react-router-dom";
import LatestUsers from "../../sections/Admin/Dashboard/LatestUsers";
import TopItems from "../../sections/Admin/Dashboard/TopItems";
import LatestItems from "../../sections/Admin/Dashboard/LatestItems";
import LatestReviews from "../../sections/Admin/Dashboard/LatestReviews";

import EntityActions from "../../base/EntityContainer/actions"
import {connect} from "react-redux";

const Dashboard = ({dispatch}) => {

    const onRefresh = (entity, name, url, params) => {
        dispatch(
            EntityActions.FetchAll.request({
                entity, name, url, params
            })
        )
    };

    return (
        <>
            <div className="col-12">
                <div className="main__title">
                    <h2>Dashboard</h2>
                    <NavLink to="/admin/movie/add" className="main__title-link">add item</NavLink>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
                <div className="stats">
                    <span>Unique views this month</span>
                    <p>5 678</p>
                    <i className="icon ion-ios-stats"/>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
                <div className="stats">
                    <span>Items added this month</span>
                    <p>172</p>
                    <i className="icon ion-ios-film"/>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
                <div className="stats">
                    <span>New comments</span>
                    <p>2 573</p>
                    <i className="icon ion-ios-chatbubbles"/>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
                <div className="stats">
                    <span>New reviews</span>
                    <p>1 021</p>
                    <i className="icon ion-ios-star-half"/>
                </div>
            </div>

            <TopItems onRefresh={onRefresh}/>

            <LatestItems onRefresh={onRefresh}/>

            <LatestUsers onRefresh={onRefresh}/>

            <LatestReviews onRefresh={onRefresh}/>

        </>
    );
};

export default connect()(Dashboard);
