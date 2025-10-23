'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, Plus, Download, Eye, Edit, Trash2, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CoachAthletesPage() {
  const [athletes] = useState([
    { id: "1", name: "María García", email: "maria.garcia@email.com", phone: "+54 9 11 2345-6789", category: "Women's Physique", status: "active" },
    { id: "2", name: "Carlos Rodríguez", email: "carlos.rodriguez@email.com", phone: "+54 9 11 3456-7890", category: "Men's Classic Physique", status: "active" },
    { id: "3", name: "Ana Martínez", email: "ana.martinez@email.com", phone: "+54 9 11 4567-8901", category: "Bikini", status: "active" },
    { id: "4", name: "Diego López", email: "diego.lopez@email.com", phone: "+54 9 11 5678-9012", category: "Men's Physique", status: "active" },
    { id: "5", name: "Sofia Fernández", email: "sofia.fernandez@email.com", phone: "+54 9 11 6789-0123", category: "Figure", status: "active" },
    { id: "6", name: "Roberto Gómez", email: "roberto.gomez@email.com", phone: "+54 9 11 7890-1234", category: "Men's Open", status: "inactive" },
    { id: "7", name: "Valeria Torres", email: "valeria.torres@email.com", phone: "+54 9 11 8901-2345", category: "Women's Physique", status: "active" },
    { id: "8", name: "Lucas Pérez", email: "lucas.perez@email.com", phone: "+54 9 11 9012-3456", category: "Men's Physique", status: "active" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAthletes, setSelectedAthletes] = useState(new Set());

  const filteredAthletes = athletes.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Mis Atletas</h1>
        <p className="text-muted-foreground">Gestiona tu roster de atletas</p>
      </header>

      <Card className="bg-card mb-6">
        <CardContent className="pt-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Buscar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            Roster ({filteredAthletes.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Desktop table view */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Nombre</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Categoría</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Estado</th>
                </tr>
              </thead>
              <tbody>
                {filteredAthletes.map(a => (
                  <tr key={a.id} className="border-b border-border hover:bg-muted/30">
                    <td className="py-3 px-4"><p className="font-bold">{a.name}</p></td>
                    <td className="py-3 px-4"><p className="text-sm text-muted-foreground">{a.email}</p></td>
                    <td className="py-3 px-4"><Badge variant="secondary">{a.category}</Badge></td>
                    <td className="py-3 px-4"><Badge className={a.status === "active" ? "bg-green-600/20" : "bg-gray-600/20"}>{a.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card view */}
          <div className="md:hidden space-y-4">
            {filteredAthletes.map(a => (
              <Card key={a.id} className="bg-muted/30">
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <p className="font-bold text-lg">{a.name}</p>
                    <p className="text-sm text-muted-foreground">{a.email}</p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">{a.category}</Badge>
                      <Badge className={a.status === "active" ? "bg-green-600/20 text-green-700" : "bg-gray-600/20 text-gray-700"}>{a.status}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
