import React from 'react';
import Sidebar from "../Admin/Sidebar";
import Header from "../Admin/Header";
import "../../assets/styles/admin.css"


const AdminLayout = (Component) => {
    return () => {
        return (
            <div className={'admin-body'}>
                <Header/>
                <Sidebar/>
                <main className="main">
                    <div className="container-fluid">
                        <div className="row">
                            <Component/>
                        </div>
                    </div>
                </main>
            </div>
        );
    };
};

export default AdminLayout;