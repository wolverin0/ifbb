import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { NotificationBell } from "@/components/notification-bell";
import { DemoBanner } from "@/components/demo-banner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background">
      <DemoBanner />
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-card flex items-center justify-end px-6 lg:px-8">
          <NotificationBell />
        </header>
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
