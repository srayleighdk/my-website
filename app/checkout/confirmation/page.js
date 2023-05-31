"use client";
import useFromStore from "@/app/hooks/useFromStore";
import useOrderStore from "@/app/hooks/useOrderStore";
import { useEffect } from "react";
const Confirmation = () => {
  const order = useFromStore(useOrderStore, (state) => state.response);
  console.log(order?.data);
  if (order) {
    return (
      <main className="mx-auto max-w-[120rem]">
        <div className="grid-container px-4">
          <h2 className="xl:mb-6 text-xl lg:text-4xl md:text-2xl font-bold font-serif">
            Confirmation
          </h2>

          <div className="font-sans text-sm font-bold md:text-base xl:col-span-10 xl:col-start-2">
            <h2 className="text-2xl font-bold mb-4">
              Thank You for Your Order, {order.data.customer.lastname}
            </h2>
            <p className="mb-4">
              We appreciate your trust in our products and services. To confirm
              your order, please transfer the specified amount to our bank
              account using the details below:
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Bank Account Details:</h3>
              <p>Bank Name: Sacombank</p>
              <p>Account Holder: Test</p>
              <p>Account Number: 123456789</p>
            </div>
            <p>
              When making the transfer, please include your order number{" "}
              <strong>{order.data.id}</strong> as the payment reference. Once
              the transfer is completed, please notify us by replying to this
              email or contacting our customer support team. We will verify the
              payment and confirm your order.
            </p>
          </div>
        </div>
        <div></div>
      </main>
    );
  }
  return null;
};

export default Confirmation;
