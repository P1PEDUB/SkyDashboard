import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import ProductsList from "./ProductsList";
import LastProduct from "./LastProductDb"
import ContentRowProducts from "./ContentRowProducts";
import ContentWrapper from "./ContentWrapper"
import Error404 from "./Error404";

 
const Sidebar = () => {
  return (
    <React.Fragment>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*Sidebar - Brand*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img
              className="w-100"
              src="assets/images/skyDashboard.png"
              alt="Digital House"
            />
          </div>
        </a>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - SkydiveHouse</span>
          </Link>  
          
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Actions</div>

        {/* Nav Item - Pages */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
        </li>

        {/* Nav Item - Charts */}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        {/* Nav Item - Tables */}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <Link to="/last-product">LastProduct</Link>
        </li>
        <li>
          <Link to="/content-row-products">ContentRowProducts</Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    <Switch>
      <Route  exact path="/" component= {ContentWrapper} />
      <Route path="/products" component= {ProductsList} />
      <Route path="/last-product"component= {LastProduct} />
      <Route path="/content-row-products" component= {ContentRowProducts} />
      <Route component= {Error404} />
    </Switch>

      </React.Fragment>
  );
};

export default Sidebar;
