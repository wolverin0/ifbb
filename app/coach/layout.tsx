import { DashboardNavigation } from "@/components/dashboard-navigation";
import { DemoBanner } from "@/components/demo-banner";
import { Footer } from "@/components/footer";

const coachNavItems = [
  { href: '/coach/dashboard', label: 'Dashboard' },
  { href: '/coach/atletas', label: 'Mis Atletas' },
  { href: '/coach/registro-evento', label: 'Registro de Eventos' },
  { href: '/coach/resultados', label: 'Resultados' },
  { href: '/coach/perfil', label: 'Mi Perfil' },
]

export default function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DemoBanner />
      <DashboardNavigation navItems={coachNavItems} title="Panel Entrenador" />
      <main className="container mx-auto px-4 py-24 lg:py-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
