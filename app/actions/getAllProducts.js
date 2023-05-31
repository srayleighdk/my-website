import prisma from "../libs/prismadb";

export default async function getAllProducts() {
  try {
    const allProducts = await prisma.product.findMany({
      include: {
        images: true,
      },
    });
    return allProducts;
  } catch (error) {
    return error;
  }
}
