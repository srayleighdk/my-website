import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function DashboardPage() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) return;
  return <div className="bg-emerald-500">Hello, {session?.user?.name}</div>;
}

export default DashboardPage;
