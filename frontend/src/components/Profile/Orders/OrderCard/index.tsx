import React from "react";
import { OrderType } from "../../../../context/userContext";
import { getUpdateDate } from "../../../../utils/getDate";

type OrderCardType = Pick<
  OrderType,
  "quantity" | "priceTotal" | "product" | "updatedAt" | "status"
>;

export const OrderCard = ({
  quantity,
  priceTotal,
  product,
  updatedAt,
  status,
}: OrderCardType) => {
  let orderStatus = "Carregando";

  switch (orderStatus) {
    case "shipped":
      orderStatus = "Enviado";
      break;
    case "delivered":
      orderStatus = "Entregue";
      break;
    default:
      orderStatus = "Preparando";
  }

  return (
    <section className="orderCard">
      <div className="px-4">
        <h3>
          Produto: <span className="orderCardSpan">{product.name}</span>
        </h3>
        <h3>
          Quantidade: <span className="orderCardSpan">{quantity}</span>
        </h3>
        <h3>
          Valor total: <span className="orderCardSpan">{priceTotal}</span>
        </h3>
      </div>
      <div className="orderCardStatus">
        <h3>
          Atualizado em:{" "}
          <span className="orderCardSpan">{getUpdateDate(updatedAt)}</span>
        </h3>
        <h3>
          Status: <span className="orderCardSpan">{orderStatus}</span>
        </h3>
      </div>
    </section>
  );
};
