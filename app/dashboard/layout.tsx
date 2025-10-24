import { DashboardNavigation } from "@/components/dashboard-navigation";
import { DemoBanner } from "@/components/demo-banner";
import { Footer } from "@/components/footer";

const athleteNavItems = [
  { href: '/dashboard', label: 'Resumen' },
  { href: '/dashboard/mis-eventos', label: 'Mis Eventos' },
  { href: '/dashboard/mis-resultados', label: 'Mis Resultados' },
  { href: '/dashboard/progreso', label: 'Progreso' },
  { href: '/dashboard/mis-fotos', label: 'Mis Fotos' },
  { href: '/dashboard/notificaciones', label: 'Notificaciones' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DemoBanner />
      <DashboardNavigation navItems={athleteNavItems} title="Panel de Atleta" />
      <main className="container mx-auto px-4 py-24 lg:py-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
