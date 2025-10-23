import { AdminSidebar } from "@/components/admin-sidebar";
import { DemoBanner } from "@/components/demo-banner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background">
      <DemoBanner />
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
