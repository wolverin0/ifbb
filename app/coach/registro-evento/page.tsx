'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, CreditCard, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CoachEventRegistrationPage() {
  const events = [
    { id: "1", title: "Campeonato Nacional IFBB Argentina 2025", date: "15 de Marzo, 2025", cost: 2500 },
    { id: "2", title: "Copa Provincial Córdoba", date: "22 de Marzo, 2025", cost: 1800 },
    { id: "3", title: "Torneo Regional Mendoza", date: "5 de Abril, 2025", cost: 1500 },
  ];

  const [step, setStep] = useState("event");
  const [eventId, setEventId] = useState("");
  const selectedEvent = events.find(e => e.id === eventId);

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Registro de Eventos</h1>
        <p className="text-muted-foreground">Registra tus atletas en eventos</p>
      </header>

      {step === "event" && (
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              Seleccionar Evento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {events.map(e => (
                <button key={e.id} onClick={() => {setEventId(e.id); setStep("athletes");}} className={`p-4 rounded-lg border-2 text-left ${eventId === e.id ? "border-purple-600 bg-purple-600/10" : "border-border"}`}>
                  <h3 className="font-bold mb-2">{e.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{e.date}</p>
                  <Badge>${e.cost}</Badge>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {step === "athletes" && (
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Seleccionar Atletas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg bg-purple-600/10">
              <p className="text-foreground font-semibold">{selectedEvent?.title}</p>
              <p className="text-sm text-muted-foreground">${selectedEvent?.cost}/atleta</p>
            </div>
            <Button onClick={() => setStep("summary")} className="bg-purple-600 hover:bg-purple-700 mt-6">
              Continuar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === "summary" && (
        <Card className="bg-gradient-to-br from-purple-600/10 to-cyan-600/10">
          <CardHeader>
            <CardTitle>Resumen</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{selectedEvent?.title}</p>
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">
              <CreditCard className="w-5 h-5 mr-2" />
              Proceder al Pago
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
