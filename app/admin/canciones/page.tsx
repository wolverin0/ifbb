'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Search, Volume2, CheckCircle, XCircle, RefreshCw } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

interface Song {
  id: string
  athleteName: string
  athletePhoto: string
  eventName: string
  category: string
  uploadDate: string
  fileName: string
  fileSize: string
  duration: number
  status: 'pending' | 'approved' | 'rejected'
  rejectReason?: string
}

const mockSongs: Song[] = [
  {
    id: '1',
    athleteName: 'Carlos Martinez',
    athletePhoto: '👨‍🦱',
    eventName: 'Mr. Olympia 2024',
    category: 'Open Bodybuilding',
    uploadDate: '2024-10-22',
    fileName: 'carlos_routine.mp3',
    fileSize: '4.2 MB',
    duration: 180,
    status: 'pending',
  },
  {
    id: '2',
    athleteName: 'Sofia Rodriguez',
    athletePhoto: '👩‍🦱',
    eventName: 'Copa Provincial',
    category: 'Bikini',
    uploadDate: '2024-10-22',
    fileName: 'sofia_music.mp3',
    fileSize: '3.8 MB',
    duration: 150,
    status: 'pending',
  },
  {
    id: '3',
    athleteName: 'Juan Lopez',
    athletePhoto: '👨‍🦲',
    eventName: 'Torneo Regional',
    category: 'Classic Physique',
    uploadDate: '2024-10-21',
    fileName: 'juan_track.mp3',
    fileSize: '5.1 MB',
    duration: 200,
    status: 'pending',
  },
  {
    id: '4',
    athleteName: 'Maria Garcia',
    athletePhoto: '👩',
    eventName: 'Mr. Olympia 2024',
    category: 'Women Bodybuilding',
    uploadDate: '2024-10-21',
    fileName: 'maria_song.mp3',
    fileSize: '4.5 MB',
    duration: 170,
    status: 'pending',
  },
  {
    id: '5',
    athleteName: 'Diego Sanchez',
    athletePhoto: '👨‍🦱',
    eventName: 'Nacional',
    category: 'Men Physique',
    uploadDate: '2024-10-20',
    fileName: 'diego_audio.mp3',
    fileSize: '3.9 MB',
    duration: 160,
    status: 'pending',
  },
  {
    id: '6',
    athleteName: 'Laura Fernandez',
    athletePhoto: '👩‍🦰',
    eventName: 'Copa Provincial',
    category: 'Bikini',
    uploadDate: '2024-10-20',
    fileName: 'laura_music.mp3',
    fileSize: '4.3 MB',
    duration: 175,
    status: 'pending',
  },
  {
    id: '7',
    athleteName: 'Pablo Morales',
    athletePhoto: '👨',
    eventName: 'Torneo Regional',
    category: 'Bodybuilding',
    uploadDate: '2024-10-19',
    fileName: 'pablo_track.mp3',
    fileSize: '4.7 MB',
    duration: 185,
    status: 'pending',
  },
  {
    id: '8',
    athleteName: 'Ana Castro',
    athletePhoto: '👩',
    eventName: 'Mr. Olympia 2024',
    category: 'Figure',
    uploadDate: '2024-10-19',
    fileName: 'ana_song.mp3',
    fileSize: '4.1 MB',
    duration: 155,
    status: 'pending',
  },
  {
    id: '9',
    athleteName: 'Roberto Silva',
    athletePhoto: '👨‍🦲',
    eventName: 'Nacional',
    category: 'Classic Physique',
    uploadDate: '2024-10-18',
    fileName: 'roberto_audio.mp3',
    fileSize: '4.4 MB',
    duration: 165,
    status: 'approved',
  },
  {
    id: '10',
    athleteName: 'Valentina Ruiz',
    athletePhoto: '👩‍🦱',
    eventName: 'Copa Provincial',
    category: 'Wellness',
    uploadDate: '2024-10-18',
    fileName: 'valentina_music.mp3',
    fileSize: '4.0 MB',
    duration: 180,
    status: 'approved',
  },
  {
    id: '11',
    athleteName: 'Fernando Lopez',
    athletePhoto: '👨',
    eventName: 'Torneo Regional',
    category: 'Men Physique',
    uploadDate: '2024-10-17',
    fileName: 'fernando_track.mp3',
    fileSize: '3.7 MB',
    duration: 145,
    status: 'approved',
  },
  {
    id: '12',
    athleteName: 'Carla Mendez',
    athletePhoto: '👩',
    eventName: 'Mr. Olympia 2024',
    category: 'Bikini',
    uploadDate: '2024-10-17',
    fileName: 'carla_song.mp3',
    fileSize: '4.6 MB',
    duration: 175,
    status: 'approved',
  },
  {
    id: '13',
    athleteName: 'Miguel Torres',
    athletePhoto: '👨‍🦱',
    eventName: 'Nacional',
    category: 'Bodybuilding',
    uploadDate: '2024-10-16',
    fileName: 'miguel_audio.mp3',
    fileSize: '4.8 MB',
    duration: 190,
    status: 'approved',
  },
  {
    id: '14',
    athleteName: 'Isabella Martinez',
    athletePhoto: '👩‍🦰',
    eventName: 'Copa Provincial',
    category: 'Figure',
    uploadDate: '2024-10-15',
    fileName: 'isabella_music.mp3',
    fileSize: '4.2 MB',
    duration: 170,
    status: 'rejected',
    rejectReason: 'Audio quality issues - please re-upload with better quality',
  },
  {
    id: '15',
    athleteName: 'Francisco Rios',
    athletePhoto: '👨',
    eventName: 'Torneo Regional',
    category: 'Classic Physique',
    uploadDate: '2024-10-15',
    fileName: 'francisco_track.mp3',
    fileSize: '3.6 MB',
    duration: 155,
    status: 'rejected',
    rejectReason: 'File duration exceeds maximum allowed time',
  },
]

type FilterStatus = 'pending' | 'approved' | 'rejected' | 'all'

export default function CancionesPage() {
  const [songs, setSongs] = useState<Song[]>(mockSongs)
  const [filter, setFilter] = useState<FilterStatus>('pending')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSongs, setSelectedSongs] = useState<Set<string>>(new Set())
  const [showRejectModal, setShowRejectModal] = useState(false)
  const [rejectingId, setRejectingId] = useState<string | null>(null)
  const [rejectReason, setRejectReason] = useState('')

  const filteredSongs = useMemo(() => {
    return songs.filter(song => {
      const matchesFilter = filter === 'all' || song.status === filter
      const matchesSearch = song.athleteName.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [songs, filter, searchQuery])

  const stats = {
    pending: songs.filter(s => s.status === 'pending').length,
    approved: songs.filter(s => s.status === 'approved').length,
    rejected: songs.filter(s => s.status === 'rejected').length,
  }

  const handleApprove = (id: string) => {
    setSongs(prev => prev.map(song =>
      song.id === id ? { ...song, status: 'approved' } : song
    ))
    setSelectedSongs(prev => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  const handleRejectClick = (id: string) => {
    setRejectingId(id)
    setRejectReason('')
    setShowRejectModal(true)
  }

  const handleRejectConfirm = () => {
    if (rejectingId) {
      setSongs(prev => prev.map(song =>
        song.id === rejectingId
          ? { ...song, status: 'rejected', rejectReason }
          : song
      ))
      setSelectedSongs(prev => {
        const next = new Set(prev)
        next.delete(rejectingId)
        return next
      })
    }
    setShowRejectModal(false)
    setRejectingId(null)
    setRejectReason('')
  }

  const handleRequestReplacement = (id: string) => {
    // Mark for replacement request (could be a different status or notification)
    console.log('Requesting replacement for:', id)
  }

  const toggleSelectSong = (id: string) => {
    const newSelected = new Set(selectedSongs)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedSongs(newSelected)
  }

  const toggleSelectAll = () => {
    if (selectedSongs.size === filteredSongs.length) {
      setSelectedSongs(new Set())
    } else {
      setSelectedSongs(new Set(filteredSongs.map(s => s.id)))
    }
  }

  const handleBulkApprove = () => {
    setSongs(prev => prev.map(song =>
      selectedSongs.has(song.id) ? { ...song, status: 'approved' } : song
    ))
    setSelectedSongs(new Set())
  }

  const handleBulkReject = () => {
    setSongs(prev => prev.map(song =>
      selectedSongs.has(song.id) ? { ...song, status: 'rejected', rejectReason: 'Rejected via bulk action' } : song
    ))
    setSelectedSongs(new Set())
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-2 pl-16 lg:pl-0">
        <h1 className="text-2xl sm:text-4xl font-bold text-foreground">Aprobación de Canciones</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Revisa, aprueba o rechaza canciones subidas por atletas.</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
              <p className="text-sm text-muted-foreground mt-1">Pendientes</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{stats.approved}</div>
              <p className="text-sm text-muted-foreground mt-1">Aprobadas</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{stats.rejected}</div>
              <p className="text-sm text-muted-foreground mt-1">Rechazadas</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="space-y-4">
        {/* Tabs */}
        <div className="flex gap-2 border-b border-border">
          {(['pending', 'approved', 'rejected', 'all'] as FilterStatus[]).map(tab => (
            <button
              key={tab}
              onClick={() => {
                setFilter(tab)
                setSelectedSongs(new Set())
              }}
              className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                filter === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab === 'pending' && `Pendientes (${stats.pending})`}
              {tab === 'approved' && `Aprobadas (${stats.approved})`}
              {tab === 'rejected' && `Rechazadas (${stats.rejected})`}
              {tab === 'all' && `Todas (${songs.length})`}
            </button>
          ))}
        </div>

        {/* Search and Bulk Actions */}
        <div className="flex gap-4 items-end">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre de atleta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {selectedSongs.size > 0 && (
            <div className="flex gap-2">
              <Button
                onClick={handleBulkApprove}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Aprobar ({selectedSongs.size})
              </Button>
              <Button
                onClick={handleBulkReject}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Rechazar ({selectedSongs.size})
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Songs Grid */}
      {filteredSongs.length > 0 ? (
        <div className="space-y-4">
          {/* Select All Checkbox (when filter is not 'all') */}
          {filter !== 'all' && filteredSongs.length > 0 && (
            <div className="flex items-center gap-2 p-4 bg-muted/50 rounded-lg">
              <Checkbox
                checked={selectedSongs.size === filteredSongs.length && filteredSongs.length > 0}
                onChange={toggleSelectAll}
              />
              <span className="text-sm font-medium">
                Seleccionar todo ({filteredSongs.length})
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSongs.map(song => (
              <Card key={song.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3 flex-1">
                      <Checkbox
                        checked={selectedSongs.has(song.id)}
                        onChange={() => toggleSelectSong(song.id)}
                      />
                      <div className="text-4xl">{song.athletePhoto}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{song.athleteName}</CardTitle>
                        <p className="text-xs text-muted-foreground mt-1">{song.eventName}</p>
                      </div>
                    </div>
                    <Badge
                      className={`whitespace-nowrap ${
                        song.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : song.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {song.status === 'pending' && 'Pendiente'}
                      {song.status === 'approved' && 'Aprobada'}
                      {song.status === 'rejected' && 'Rechazada'}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Song Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Categoría:</span>
                      <span className="font-medium">{song.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subida:</span>
                      <span className="font-medium">{song.uploadDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Archivo:</span>
                      <span className="font-medium text-xs">{song.fileName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tamaño:</span>
                      <span className="font-medium">{song.fileSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duración:</span>
                      <span className="font-medium">{formatDuration(song.duration)}</span>
                    </div>
                  </div>

                  {/* Audio Player */}
                  <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Escuchar:</p>
                    <audio
                      controls
                      className="w-full h-8"
                      onError={() => console.log('Audio not available')}
                    >
                      <source src={`/audio/${song.id}.mp3`} type="audio/mpeg" />
                      Tu navegador no soporta HTML5 audio.
                    </audio>
                  </div>

                  {/* Reject Reason (if rejected) */}
                  {song.status === 'rejected' && song.rejectReason && (
                    <div className="bg-red-100/50 border border-red-200 rounded-lg p-3">
                      <p className="text-xs font-medium text-red-900 mb-1">Razón del rechazo:</p>
                      <p className="text-xs text-red-800">{song.rejectReason}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {song.status !== 'approved' && song.status !== 'rejected' && (
                      <>
                        <Button
                          onClick={() => handleApprove(song.id)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs"
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Aprobar
                        </Button>
                        <Button
                          onClick={() => handleRejectClick(song.id)}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs"
                        >
                          <XCircle className="w-4 h-4 mr-1" />
                          Rechazar
                        </Button>
                        <Button
                          onClick={() => handleRequestReplacement(song.id)}
                          className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white text-xs"
                        >
                          <RefreshCw className="w-4 h-4 mr-1" />
                          Reemplazar
                        </Button>
                      </>
                    )}
                    {song.status === 'approved' && (
                      <Button disabled className="w-full bg-green-600 text-white text-xs cursor-default">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Aprobada
                      </Button>
                    )}
                    {song.status === 'rejected' && (
                      <Button disabled className="w-full bg-red-600 text-white text-xs cursor-default">
                        <XCircle className="w-4 h-4 mr-1" />
                        Rechazada
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground mb-2">No se encontraron canciones</p>
            <p className="text-sm text-muted-foreground">
              {searchQuery ? 'Intenta con otro término de búsqueda' : 'No hay canciones en esta categoría'}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Reject Modal */}
      <Dialog open={showRejectModal} onOpenChange={setShowRejectModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rechazar Canción</DialogTitle>
            <DialogDescription>
              Proporciona una razón para el rechazo que será visible para el atleta.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Textarea
              placeholder="Ej: Calidad de audio insuficiente, duración excesiva, etc..."
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              className="min-h-[120px]"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowRejectModal(false)}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleRejectConfirm}
              className="bg-red-600 hover:bg-red-700 text-white"
              disabled={!rejectReason.trim()}
            >
              Rechazar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
