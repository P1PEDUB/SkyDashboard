import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";




const LastProductDb = () => {

  let [lastProduct, setLastProduct] = useState([]);

  let endpointLastProduct = "http://localhost:5000/api/products/lastProduct";

  useEffect(() => {
    
    if(lastProduct.length === 0){
      fetch(endpointLastProduct,  {
        method: 'GET',
        headers: { 'Content-type': 'application/json'},
      })
        .then(response => {
          return response.json();
        }).then(data => {
          if(data.data.image !== null && data.data.image !== "" && data.data.image !== undefined){
            data.data.image = "http://localhost:5000/img/uploads/products/" + data.data.image;
          }
          setLastProduct(data.data);
        })
        .catch(error => {
          console.log("Error al intentar consumir la api con endpoint: " + endpointLastProduct + ". Se obtiene el siguiente error: " + error);
        })
    }
      
  });
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
                  src={lastProduct.image}
                  alt=" Salto de Demostracion para eventos "
                />
              </div>
              <div>{lastProduct.product_name}</div>
              <Link
                style={{backgroundColor: "#962420", color: "white"}}
                className="btn"
                rel="nofollow"
                to={`/wiew-detail/${lastProduct.id}`}
              >
                View product detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default LastProductDb;
