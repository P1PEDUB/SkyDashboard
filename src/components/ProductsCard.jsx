import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../stylesheet.css';

const ProductsCard = ({ title, id }) => {
  return (
    <>
      <div className="col-lg-12 mb-4">
        <div className="card bg-dark text-white shadow">
          <Link className="btn btn-lg form-button2" rel="nofollow" to={`/wiew-detail/${id}`}> {title} </Link>
        </div>
      </div>
    </>
  )
};

ProductsCard.propTypes = {
  title: PropTypes.string.isRequired,
};

ProductsCard.defaultProps = {
  title: "undefined",
};



export default ProductsCard;