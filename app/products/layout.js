import SidebarProducts from "./SidebarProducts";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex h-screen">
        <SidebarProducts />
        <div className="flex-1 p-10">{children}</div>
      </div>
    </section>
  );
}
