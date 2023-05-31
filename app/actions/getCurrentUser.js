import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    console.log(session.user.email);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: "dquang1305@gmail.com",
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      currentUser,
    };
  } catch (error) {
    return null;
  }
}
