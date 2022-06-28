import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from 'react';

const Layout = ({ setToken }) => {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.remove('login-page')
    })

    const handleLogout = async e => {
        e.preventDefault();
        setToken({});
        navigate("/");
    }

    return (
        <div className="wrapper">
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                            <i className="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </nav>

            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item menu-open">
                                <a href="/" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="/" className="nav-link active">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Dashboard v1</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a href="/user" className="nav-link">
                                    <i className="nav-icon fas fa-user"></i>
                                    <p>
                                        User
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/role" className="nav-link">
                                    <i className="nav-icon fas fa-chalkboard-user"></i>
                                    <p>
                                        Role
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/permission" className="nav-link">
                                    <i className="nav-icon fas fa-book-open-reader"></i>
                                    <p>
                                        Permission
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" onClick={handleLogout}>
                                    <i className="nav-icon fas fa-arrow-right-from-bracket"></i>
                                    <p>
                                        Logout
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div className="content-wrapper">
                <Outlet />
            </div>
            <footer className="main-footer">
                <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.2.0
                </div>
            </footer>

            <aside className="control-sidebar control-sidebar-dark">
            </aside>
        </div>
    )
};

export default Layout;