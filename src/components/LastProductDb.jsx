import React from "react";
import PropTypes from "prop-types";
/*
id={lastProduct.id}
          name={lastProduct.product_name}
          description={lastProduct.description}
          image={lastProduct.image}/>
		  */

const LastProductDb = ({id, productName, description, image}) => {
  return (
    <div>
        <div class="row">
						{/* Last Movie in DB */}
						<div class="col-lg-6 mb-4">
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h5 class="m-0 font-weight-bold text-gray-800">Last Product in Data Base</h5>
								</div>
								<div class="card-body">
									<div class="text-center">
										<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{ width:"40rem" }} src={image} alt=" Salto de Demostracion para eventos " />
									</div>
									<div>
										{productName}
									</div>
									<a class="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>
						{/* End content row last movie in Data Base */}

						
    	</div>
	</div>	
  )
};

/*
LastProductDb.PropTypes = {

}
*/

export default LastProductDb;