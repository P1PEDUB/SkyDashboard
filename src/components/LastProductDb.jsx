import React from "react";



const LastProductDb = ({ id, productName, description, image }) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Last Product in Data Base
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "40rem" }}
                  src={image}
                  alt=" Salto de Demostracion para eventos "
                />
              </div>
              <div>{productName}</div>
              <a
                className="btn btn-primary"
                target="_blank"
                rel="nofollow"
                href="/wiew-detail"
              >
                View product detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default LastProductDb;
