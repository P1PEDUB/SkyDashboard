import React, { useEffect, useState} from "react";
import CardData from "./CardData";

const ContentRowProducts = () => {

  let [products, setProducts] = useState([]);
  let [users, setUsers] = useState([]);

  let endpointProducts = "http://localhost:5000/api/products";
  let endpointUser = "http://localhost:5000/api/users";

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

    if(users.length === 0){

      fetch(endpointUser,  {
        method: 'GET',
        headers: { 'Content-type': 'application/json'},
      })
        .then(response => {
          return response.json();
        }).then(data => {
          console.log("ejecucion usuarios");
          setUsers(data);
        })
        .catch(error => {
          console.log("Error al intentar consumir la api con endpoint: " + endpointUser + ". Se obtiene el siguiente error: " + error);
        })
    }


  }, [products], [users]);
  
  const TotalProducts = {
    title: "Total Products",
    borderColor: "primary",
    quantity: products.count,
    icon: "fa-clipboard-list",
  };

  const TotalUsers = {
    title: "Total Users",
    borderColor: "warning",
    quantity: users.count,
    icon: "fa-user-check",
  };

  const cardProps = [TotalProducts, TotalUsers];

  return (
    <>
      <div className="row">
        {cardProps.map((card, i) => {
          return (
            <CardData
              title={card.title}
              borderColor={card.borderColor}
              quantity={card.quantity}
              icon={card.icon}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContentRowProducts;
