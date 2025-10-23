'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface AddSponsorModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (sponsor: any) => void
}

export function AddSponsorModal({ isOpen, onClose, onAdd }: AddSponsorModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    tier: 'Silver',
    active: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name.trim()) {
      onAdd(formData)
      setFormData({ name: '', logo: '', tier: 'Silver', active: true })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-md w-full p-6 glass-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Agregar Patrocinador</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#B78B1E]"
              placeholder="Nombre del patrocinador"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Logo URL</label>
            <input
              type="text"
              value={formData.logo}
              onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#B78B1E]"
              placeholder="URL del logo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tier</label>
            <select
              value={formData.tier}
              onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#B78B1E]"
            >
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="active"
              checked={formData.active}
              onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
              className="w-4 h-4 rounded border-border"
            />
            <label htmlFor="active" className="text-sm font-medium text-foreground">
              Activo
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold"
            >
              Agregar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
