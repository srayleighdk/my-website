"use client";
import { useForm } from "react-hook-form";
import Input from "@/app/components/Inputs/Input";
import Heading from "@/app/components/Heading";
import Button from "@/app/components/Button";
import axios from "axios";

export default function NewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div>
      <Heading title={"Create New Product"} />
      <Input
        id="productName"
        label={"Product Name"}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="description"
        label={"Description"}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        type="number"
        label={"Price"}
        register={register}
        errors={errors}
        required
      />
      <Button label={"Continue"} onClick={handleSubmit} />
    </div>
  );
}
