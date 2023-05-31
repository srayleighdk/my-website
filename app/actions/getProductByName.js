import prisma from "../libs/prismadb";

export default async function getProductByName(name) {
  try {
    const Products = await prisma.product.findUnique({
      where: {
        name,
      },
      include: {
        images: true,
      },
    });
    return Products;
  } catch (error) {
    return error;
  }
}
