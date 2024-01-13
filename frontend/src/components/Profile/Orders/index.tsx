import React, { useEffect, useState } from "react";
import { OrderType, useUserCont } from "../../../context/userContext";
import { OrderCard } from "./OrderCard";

export const OrderList = () => {
  const { getUserOrders } = useUserCont();
  const [orders, setOrders] = useState<OrderType[] | undefined>();

  useEffect(() => {
    const getOrders = async () => {
      const data = await getUserOrders();

      setOrders(data);
    };

    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="orders flex flex-col gap-8 w-full">
      <h3 className="text-brand-1 font-medium text-heading3 px-3">Pedidos</h3>

      <ul className="listStyle w-full xl:col-span-2 xl:grid-cols-2">
        {orders?.map((order) => (
          <OrderCard
            quantity={order.quantity}
            priceTotal={order.priceTotal}
            product={order.product}
            updatedAt={order.updatedAt}
            status={order.status}
            key={order.id}
          />
        ))}
      </ul>
    </section>
  );
};
