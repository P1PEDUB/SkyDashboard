import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import ProductsList from "./ProductsList";
import LastProduct from "./LastProductDb";
import ContentRowProducts from "./ContentRowProducts";
import ContentWrapper from "./ContentWrapper";
import WiewDetail from "./WiewDetail";
import Error404 from "./Error404";

const Sidebar = () => {
  return (
    <React.Fragment>
      <ul
        className="navbar-nav sidebar sidebar-dark accordion"
        id="accordionSidebar" style={{backgroundColor: "black"}}
      >
        {/*Sidebar - Brand*/}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img
              className="w-100"
              src="assets/images/SkyDashboard-red-white.png"
              alt="Digital House"
            />
          </div>
        </Link>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

      

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Actions</div>

        {/* Nav Item - Pages */}

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/content-row-products">
            <i className="fas fa-fw fa-folder"></i>
            <span>Data</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/last-product">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Last Product</span>
          </Link>
        </li>

        {/* Nav Item - Tables */}
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            <i className="fas fa-fw fa-table"></i>
            <span>Products</span>
          </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <Switch>
        <Route exact path="/" component={ContentWrapper} />
        <Route path="/products" component={ProductsList} />
        <Route path="/last-product" component={LastProduct} />
        <Route path="/content-row-products" component={ContentRowProducts} />
        <Route path="/wiew-detail/:productId" component={WiewDetail} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Sidebar;
