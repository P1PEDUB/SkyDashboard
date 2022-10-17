import React, { useEffect, useState} from "react";
import ProductsCard from "./ProductsCard";

const ProductList = () => {

  let [products, setProducts] = useState([]);

  let endpointProducts = "http://localhost:5000/api/products";

  useEffect(() => {
    
    if(products.length === 0){
      fetch(endpointProducts,  {
        method: 'GET',
        headers: { 'Content-type': 'application/json'},
      })
        .then(response => {
          return response.json();
        }).then(data => {
          console.log("ejecucion productos");
          setProducts(data);
        })
        .catch(error => {
          console.log("Error al intentar consumir la api con endpoint: " + endpointProducts + ". Se obtiene el siguiente error: " + error);
        })
    }
      
  });

  const properties = {
    titulo: "LISTA DE PRODUCTOS",
  };

  
  let contenido;
  if(products === undefined || products === null || products.length === 0){
    contenido = "Cargando...";
  }else{
    contenido = products.products.map ((property, i) => {
      return <ProductsCard title= {property.name} key={i} id={property.id}/>
     });
  }

  return (
    <div>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              {properties.titulo}
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
             {contenido}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
