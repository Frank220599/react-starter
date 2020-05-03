import React, {useState} from 'react';
import classnames from "classnames";
import {Transition} from "react-transition-group"

const Tabs = ({links, children, heading}) => {
    const [isOpen, setIsOpen] = useState({0: true});
    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles = {
        entering: {opacity: 0},
        entered: {opacity: 1},
        exiting: {opacity: 1},
        exited: {opacity: 0},
    };
    const TabButtons = () => {
        return (
            <ul className="nav nav-tabs content__tabs movie-tab">
                {
                    links.map((link, index) => (
                        <li key={link} className="nav-item" onClick={() => setIsOpen({[index]: true})}>
                            <a className={classnames(["nav-link", {active: isOpen[index]}])}>
                                {link}
                            </a>
                        </li>
                    ))
                }
            </ul>
        )
    };
    return (
        <section className="content">
            <div className="content__head">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="content__title">{heading}</h2>
                            <TabButtons/>
                            <div className="content__mobile-tabs">
                                <div className="content__mobile-tabs-btn">
                                    <input type="button" value="New items"/>
                                    <span/>
                                </div>
                                <div className="content__mobile-tabs-menu">
                                    <TabButtons/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="tab-content">
                    {
                        links.map((link, index) => (
                            <Transition in={isOpen[index]}>
                                {(state) => (
                                    <div
                                        style={{
                                            ...defaultStyle,
                                            ...transitionStyles[state]
                                        }}
                                        className={classnames(["tab-pane fade", {'show active': isOpen[index]}])}
                                    >
                                        <div className="row">
                                            {children[index]}
                                        </div>
                                    </div>
                                )}
                            </Transition>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Tabs;