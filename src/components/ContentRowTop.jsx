import React from "react";
import ContentRowProducts from "./ContentRowProducts";
import LastProductDb from "./LastProductDb";
import ProductList from "./ProductsList";

const ContentRowTop = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/* Content Row Movies*/}
        <ContentRowProducts />
        {/* End movies in Data Base */}

        {/* Content Row Last Movie in Data Base */}
        <LastProductDb />
        {/* Last Movie in DB */}

        {/* End content row last movie in Data Base */}
        <ProductList />
        {/* Genres in DB */}
      </div>
    </>
  );
};

export default ContentRowTop;
