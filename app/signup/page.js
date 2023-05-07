"use client";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import iXanhApi from "../api/axios";

const schema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "Must be at least 2 characters" })
      .max(30, { message: "Cannot exceed 30 characters" }),
    lastName: z
      .string()
      .min(2, { message: "Must be at least 2 characters" })
      .max(30, { message: "Cannot exceed 30 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Must be at least 8 characters" })
      .max(100, { message: "Cannot exceed 100 characters" }),
    repeatPassword: z
      .string()
      .min(8, { message: "Must be at least 8 characters" })
      .max(100, { message: "Cannot exceed 100 characters" }),
    birthday: z
      .string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords must match",
    path: ["repeatPassword"],
  });

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res= await iXanhApi.post("api/auth/signup", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="Firstname"
              value="First name
              "
            />
          </div>
          <TextInput
            type="text"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="Lastname"
              value="Last name
              "
            />
          </div>
          <TextInput
            type="text"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            type="text"
            {...register("email", { required: true })}
            placeholder="name@flowbite.com"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            {...register("password", { required: true })}
            type="password"
            shadow={true}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            {...register("repeatPassword", { required: true })}
            type="password"
            shadow={true}
          />
          {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="birthday"
              value="Birthday
              "
            />
          </div>
          <TextInput type="date" {...register("birthday", { required: true })} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the
            <a
              href="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
}
