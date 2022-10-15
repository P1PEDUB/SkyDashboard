import React from "react";

const LastProductDb = () => {
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
										<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{ width:"40rem" }} src="assets/images/saltoDemostracion.jpeg" alt=" Salto de Demostracion para eventos " />
									</div>
									<p>SALTO DE DEMOSTRACIÓN</p>
									<a class="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>
						{/* End content row last movie in Data Base */}

						
    	</div>
	</div>	
  )
};

export default LastProductDb;