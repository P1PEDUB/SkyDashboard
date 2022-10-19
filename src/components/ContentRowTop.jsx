import React, { useEffect, useState} from "react";
import ContentRowProducts from "./ContentRowProducts";
import LastProductDb from "./LastProductDb";
import ProductList from "./ProductsList";


const ContentRowTop = () => {

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
    <>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

       
        <ContentRowProducts />
     
        <LastProductDb/>

          
      
        <ProductList />
      
        
      </div>
    </>
  );
};

export default ContentRowTop;
