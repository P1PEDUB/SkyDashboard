import React from "react";
import PropTypes from "prop-types";

const ProductsCard = ({ title }) => {
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">{title}</div>
        </div>
      </div>
    </>
  );
};

ProductsCard.propTypes = {
  title: PropTypes.string.isRequired,
};

ProductsCard.defaultProps = {
  title: "undefined",
};

export default ProductsCard;