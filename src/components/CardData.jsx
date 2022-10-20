import React from "react";
import PropTypes from "prop-types";

const CardData = ({ title, borderColor, quantity, icon }) => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className={`card border-left-${borderColor} shadow h-90 py-2`} style={{width:"300px", marginRight: "150px"}}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-uppercase mb-1">
                  {""}
                  {title}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {quantity}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas ${icon} fa-2x text-gray-300`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CardData.propTypes = {
  title: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

CardData.defaultProps = {
  title: "Titulo",
  borderColor: "secondary",
  quantity: 0,
};

export default CardData;
