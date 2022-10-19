import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const WiewDetail = () => {
	const { productId } = useParams();

	let [productDetail, setProductDetail] = useState([]);

	let endpointProductDetail = "http://localhost:5000/api/products/" + productId;

	
	useEffect(() => {
    
		if(productDetail.length === 0){
		  fetch(endpointProductDetail,  {
			method: 'GET',
			headers: { 'Content-type': 'application/json'},
		  })
			.then(response => {
			  return response.json();
			}).then(data => {
			  setProductDetail(data);
			})
			.catch(error => {
			  console.log("Error al intentar consumir la api con endpoint: " + endpointProductDetail + ". Se obtiene el siguiente error: " + error);
			})
		}
		  
	  });
	  
	  
    return(
        <div>
        <div className="row">						
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-primary">{productDetail.name}</h5>
					</div>
					<div className="card-body">
						<div className="text-center">
							<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{ width:"40rem" }} src={`http://localhost:5000/img/uploads/products/${productDetail.image}`} alt=" detalle de la imagen " />
						</div>
						<div>
							<p>{productDetail.description}</p>
						</div>
					</div>
				</div>
			</div>			
    	</div>
	</div>
	
    )
}

export default WiewDetail;