'use client'

import { useState } from 'react'
import { AdminSidebar } from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Plus, Eye, Edit2, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { AddSponsorModal } from '@/components/add-sponsor-modal'

interface Sponsor {
  id: string
  name: string
  logo: string
  tier: 'Gold' | 'Silver' | 'Bronze'
  active: boolean
  events: number
  impressions: number
  clickThrough: number
  roiScore: number
}

const mockSponsors: Sponsor[] = [
  {
    id: '1',
    name: 'Megathlon',
    logo: '/sponsors/megathlon-logo.png',
    tier: 'Gold',
    active: true,
    events: 12,
    impressions: 45000,
    clickThrough: 320,
    roiScore: 8.5,
  },
]

export default function SponsorshipDashboard() {
  const [sponsors, setSponsors] = useState<Sponsor[]>(mockSponsors)
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Patrocinadores</h1>
        <p className="text-muted-foreground mb-8">Gestiona patrocinadores y visualiza el ROI de cada uno</p>
      </main>
    </div>
  )
}
