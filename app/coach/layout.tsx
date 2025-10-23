import { CoachSidebar } from "@/components/coach-sidebar";
import { NotificationBell } from "@/components/notification-bell";
import { DemoBanner } from "@/components/demo-banner";

export default function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background">
      <DemoBanner />
      <CoachSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-card flex items-center justify-end px-6 lg:px-8">
          <NotificationBell />
        </header>
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
