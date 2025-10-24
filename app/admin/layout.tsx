import { DashboardNavigation } from "@/components/dashboard-navigation";
import { DemoBanner } from "@/components/demo-banner";
import { Footer } from "@/components/footer";

const adminNavItems = [
  { href: '/admin', label: 'Resumen' },
  { href: '/admin/eventos', label: 'Eventos' },
  { href: '/admin/atletas', label: 'Atletas' },
  { href: '/admin/canciones', label: 'Canciones' },
  { href: '/admin/pagos', label: 'Pagos' },
  { href: '/admin/reportes', label: 'Reportes' },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DemoBanner />
      <DashboardNavigation navItems={adminNavItems} title="Panel de Admin" />
      <main className="container mx-auto px-4 py-24 lg:py-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
