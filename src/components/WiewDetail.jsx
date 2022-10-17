import React from "react";

const WiewDetail = ({productName, image, description }) => {
    return(
        <div>
        <div className="row">
						
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-primary">{productName} Nombre del Producto</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{ width:"40rem" }} src={image} alt=" detalle de la imagen " />
									</div>
                                    <div>
                                        <p>{description}descripcion del producto</p>
                                    </div>
								</div>
							</div>
						</div>
						{/* End content row last movie in Data Base */}

						
    	</div>
	</div>

    )
}

export default WiewDetail;