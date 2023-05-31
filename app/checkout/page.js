"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import useCartStore from "../hooks/useCartDrawer";
import useFromStore from "../hooks/useFromStore";
import useOrderStore from "../hooks/useOrderStore";
import axios from "axios";

const Checkout = () => {
  const orderItems = useFromStore(useCartStore, (state) => state.items);
  const totalItems = useFromStore(useCartStore, (state) => state.totalItems);
  const totalPrice = useFromStore(useCartStore, (state) => state.totalPrice);
  const setResponse = useOrderStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.orderItems = orderItems;
    data.totalItems = totalItems;
    data.totalPrice = totalPrice;
    try {
      const response = await axios
        .post("api/checkout", data, {
          orderItems,
          totalItems,
          totalPrice,
        })
        .then((response) => {
          setResponse.setResponse(response);
          const dataresponse = useOrderStore.getState().response;
          if (dataresponse.status === 200) {
            router.push("checkout/confirmation");
          }
          // console.log(dataresponse);
        })
        .catch((error) => {
          console.log("Error create Order", error);
        });
    } catch (error) {
      console.log("Error create Order", error);
    }
  };

  return (
    <main className="mx-auto max-w-[120rem]">
      <div className="grid-container grid w-full grid-cols-1 gap-3 md:grid-cols-12 xl:gap-4 px-3 md:my-5 lg:px-0">
        <h2 className="col-span-full col-start-1 mb-3 xl:col-span-10 xl:col-start-2 xl:mb-6 text-xl lg:text-4xl md:text-2xl font-bold font-serif">
          Your details
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full py-6 border-gray-100">
          <div className="grid-container grid w-full grid-cols-1 gap-3 md:grid-cols-12 xl:gap-4 px-3 xl:px-0">
            <h3 className="col-span-full col-start-1 font-sans text-sm font-bold md:text-base xl:col-span-10 xl:col-start-2">
              Shipping address
            </h3>
            <div className="grid grid-cols-1 items-end gap-3 md:grid-cols-4 col-span-full col-start-1 xl:col-span-10 xl:col-start-2">
              <label className="col-span-full col-start-1 md:col-span-2">
                Company (optional)
                <input
                  className="transition-all h-8 w-full px-4 py-2.4 xl:h-10 xl:py-3 focus:ring-0 md:focus:border-primary xl:focus:ring xl:focus:ring-inset xl:focus:ring-primary"
                  type="text"
                  placeholder="Company"
                  name="company"
                  autoComplete="organization"
                  {...register("company")}
                />
              </label>
              <label className="col-span-full col-start-1 md:col-span-2 md:col-start-1">
                First name
                <input
                  className="transition-all h-8 w-full px-4 py-2.4 xl:h-10 xl:py-3 focus:ring-0 md:focus:border-primary xl:focus:ring xl:focus:ring-inset xl:focus:ring-primary"
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  autoComplete="given-name"
                  {...register("firstname")}
                />
              </label>
              <label className="col-span-full col-start-1 md:col-span-2 md:col-start-3">
                Last name
                <input
                  className="transition-all h-8 w-full px-4 py-2.4 xl:h-10 xl:py-3 focus:ring-0 md:focus:border-primary xl:focus:ring xl:focus:ring-inset xl:focus:ring-primary"
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  autoComplete="family-name"
                  {...register("lastname", { required: true })}
                />
              </label>
              <label className="col-span-full col-start-1 md:col-span-2">
                Email
                <input
                  className="transition-all h-8 w-full px-4 py-2.4 xl:h-10 xl:py-3 focus:ring-0 md:focus:border-primary xl:focus:ring xl:focus:ring-inset xl:focus:ring-primary"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autoComplete="email"
                  {...register("email", { required: true })}
                />
              </label>
              <label className="col-span-full col-start-1 md:col-span-2 md:col-start-3">
                Phone
                <input
                  className="transition-all h-8 w-full px-4 py-2.4 xl:h-10 xl:py-3 focus:ring-0 md:focus:border-primary xl:focus:ring xl:focus:ring-inset xl:focus:ring-primary"
                  type="tel"
                  placeholder="Telephone number"
                  name="phone"
                  autoComplete="tel"
                  {...register("phone", { required: true })}
                />
              </label>
              <label className="col-span-full col-start-1 md:col-span-2">
                Country
                <select
                  className="w-full h-8 xl:h-10 px-4 py-1 xl:py-2 focus:border-primary focus:ring focus:ring-inset focus:ring-primary disabled:bg-grayish disabled:bg-none"
                  name="country"
                  autoComplete="country"
                  {...register("country")}
                >
                  <option value="VN">Vietnamese</option>
                </select>
              </label>
              <label className="col-span-full col-start-1 md:col-span-2 md:col-start-3">
                Address
                <input
                  className="transition-all h-8 w-full px-4 py-2.4 xl:h-10 xl:py-3 focus:ring-0 md:focus:border-primary xl:focus:ring xl:focus:ring-inset xl:focus:ring-primary"
                  type="text"
                  placeholder="Address"
                  name="address"
                  autoComplete="address"
                  {...register("address", { required: true })}
                />
              </label>
              <label className="col-span-full col-start-1 md:col-span-2 md:col-start-1">
                Apartment, suite, unit, etc. (optional)
                <input
                  className="transition-all h-8 w-full px-4 py-2.4 xl:h-10 xl:py-3 focus:ring-0 md:focus:border-primary xl:focus:ring xl:focus:ring-inset xl:focus:ring-primary"
                  type="text"
                  placeholder="Apartment, suite, unit, etc."
                  name="streetAddition"
                  maxLength="49"
                  {...register("apartment")}
                />
              </label>
              <label className="col-span-full col-start-1 md:col-span-2 md:col-start-3">
                Postal/ZIP code
                <input
                  className="transition-all h-8 w-full px-4 py-2.4 xl:h-10 xl:py-3 focus:ring-0 md:focus:border-primary xl:focus:ring xl:focus:ring-inset xl:focus:ring-primary"
                  type="text"
                  placeholder="Postal/ZIP code"
                  name="postcode"
                  {...register("postcode")}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="grid-container grid w-full grid-cols-1 gap-3 md:grid-cols-12 xl:gap-4 px-3 py-6 lg:px-0">
          <svg
            className="col-span-full col-start-1 xl:col-span-10 xl:col-start-2  h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <div className="col-span-full col-start-1 xl:col-span-10 xl:col-start-2">
            <button
              className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-10 px-6 py-3 relative bg-primary text-white hover:bg-primary-dark disabled:bg-primary/40 rounded-full"
              type="submit"
              data-variant="rounded_yellow"
            >
              {" "}
              Continue
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Checkout;
