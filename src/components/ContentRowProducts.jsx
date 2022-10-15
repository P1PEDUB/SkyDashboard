import React from "react";
import CardData from "./CardData";

const ContentRowProducts = () => {
  
  const TotalProducts = {
    title: "Total Products",
    borderColor: "primary",
    quantity: "5",
    icon: "fa-clipboard-list",
  };

  const TotalUsers = {
    title: "Total Users",
    borderColor: "warning",
    quantity: "6",
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
