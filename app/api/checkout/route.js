import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request) {
  const body = await request.json();
  const {
    firstname,
    lastname,
    email,
    phone,
    address,
    zipcode,
    company,
    apartment,
    country,
    orderItems,
    totalItems,
    totalPrice,
  } = body;

  console.log(orderItems);

  try {
    const createCustomer = await prisma.customer.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        phone: phone,
        zipCode: zipcode,
        company,
        company,
        apartment: apartment,
        country: country,
      },
    });

    const createOrder = await prisma.order.create({
      data: {
        totalAmount: totalItems.toString(),
        totalPrice: totalPrice,
        customer: { connect: { id: createCustomer.id } },
        orderItems: {
          create: orderItems.map((item) => ({
            quantity: item.quantity,
            price: parseFloat(item.price),
            product: { connect: { id: item.id } },
          })),
        },
      },
      include: {
        customer: true,
        orderItems: {
          include: { product: true },
        },
      },
    });
    return NextResponse.json(createOrder);
  } catch (error) {
    console.log("Error create Order", error);
  }
}
