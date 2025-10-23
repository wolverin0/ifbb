'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CoachLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) router.push("/coach/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">ED</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Panel Entrenador</h1>
          <p className="text-muted-foreground">IFBB Argentina</p>
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-center">Acceso para Entrenadores</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <Input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <Input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10" />
                </div>
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 h-11">
                Iniciar Sesión
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground">o</span>
                </div>
              </div>

              <Button type="button" onClick={() => router.push("/coach/dashboard?demo=true")} variant="outline" className="w-full border-purple-600/30">
                <CheckCircle className="w-5 h-5 mr-2" />
                Modo Demostración
              </Button>
            </form>

            <div className="mt-6 p-4 rounded-lg bg-purple-600/10 border border-purple-600/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-purple-700">Demo:</span><br />
                demo@ifbb.ar / demo123
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Volver al inicio
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
