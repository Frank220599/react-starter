import React from 'react';
import {EntityContainer} from "../base/EntityContainer";

const Test = () => {
    return (
        <div>
            Fuck
            <EntityContainer.All entity={'users'} name={'All'} url={'/users'}>
                {({items,isFetched, meta}) => {
                    console.log({items, isFetched, meta})
                    return <h1>s</h1>
                }}
            </EntityContainer.All>
        </div>
    );
};

export default Test;
