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
          if(data.data.image != null && data.data.image != "" && data.data.image != undefined){
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

        {/* Content Row Products and Users */}
        <ContentRowProducts />
        {/* End Products and Users in Data Base */}

        {/* Content Row Last Product in Data Base */}
        <LastProductDb 
          id={lastProduct.id}
          productName={lastProduct.product_name}
          description={lastProduct.description}
          image={lastProduct.image}/>
        {/* Last Product in DB */}

        {/* End content row last product in Data Base */}
        <ProductList />
        {/* ProductList in DB */}
      </div>
    </>
  );
};

export default ContentRowTop;
