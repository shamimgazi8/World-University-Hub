import AdminFooter from "@/modules/@admin/@layout/footer";
import AdminHeader from "@/modules/@admin/@layout/header";
import Header from "@/modules/@layout/header";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <AdminHeader />
      {children}
      <AdminFooter />
    </main>
  );
}
