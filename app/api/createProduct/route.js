import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request) {
  const body = await request.json();
  const { name, price, description, images } = body;
  console.log(body);

  try {
    const createProduct = await prisma.product.create({
      data: {
        name,
        price,
        description,
        images: {
          create: images.map((imageUrl) => ({
            url: imageUrl,
          })),
        },
      },
      include: {
        images: true,
      },
    });
    return NextResponse.json(createProduct);
  } catch (error) {
    console.log("Error create product:", error);
  }
}
