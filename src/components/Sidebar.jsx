import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import ProductsList from "./ProductsList";
import LastProduct from "./LastProductDb";
import ContentRowProducts from "./ContentRowProducts";
import ContentWrapper from "./ContentWrapper";
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
        <li className="nav-item">
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
          <a className="nav-link collapsed" href="/content-row-products">
            <i className="fas fa-fw fa-folder"></i>
            <span>Data</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/last-product">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Last Product</span>
          </a>
        </li>

        {/* Nav Item - Tables */}
        <li className="nav-item">
          <a className="nav-link" href="/products">
            <i className="fas fa-fw fa-table"></i>
            <span>Products</span>
          </a>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <Switch>
        <Route exact path="/" component={ContentWrapper} />
        <Route path="/products" component={ProductsList} />
        <Route path="/last-product" component={LastProduct} />
        <Route path="/content-row-products" component={ContentRowProducts} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Sidebar;
