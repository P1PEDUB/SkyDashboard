import React from "react";
import ProductsCard from "./ProductsCard";

const ProductList = () => {
  const properties = {
    titulo: "LISTA DE PRODUCTOS",
  };

  const propertiesArray = [

   "Salto Tandem",
   "Curso para principiantes",
   "Curso Wingsuit",
   "Curso para Avanzados",
   "Salto de Demostracion",
  ];

  return (
    <div>
      <div class="col-lg-6 mb-4">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-gray-800">
              {properties.titulo}
            </h5>
          </div>
          <div class="card-body">
            <div class="row">
             {propertiesArray.map ((property, i) => {
              return <ProductsCard title= {property} key={i} />
             })}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductList;
