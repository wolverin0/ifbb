# Song Approval Page - Code Reference Guide

## File Locations

### Main Implementation
- **Page Component:** `/app/admin/canciones/page.tsx`
- **Admin Layout:** `/app/admin/layout.tsx`
- **Admin Sidebar:** `/components/admin-sidebar.tsx`

## Component Structure

### Song Interface
```typescript
interface Song {
  id: string
  athleteName: string
  athletePhoto: string              // emoji avatar
  eventName: string
  category: string
  uploadDate: string                // YYYY-MM-DD
  fileName: string
  fileSize: string                  // "4.2 MB"
  duration: number                  // seconds
  status: 'pending' | 'approved' | 'rejected'
  rejectReason?: string
}
```

### Filter Status Type
```typescript
type FilterStatus = 'pending' | 'approved' | 'rejected' | 'all'
```

## Key Functions

### Filter and Search
```typescript
const filteredSongs = useMemo(() => {
  return songs.filter(song => {
    const matchesFilter = filter === 'all' || song.status === filter
    const matchesSearch = song.athleteName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })
}, [songs, filter, searchQuery])
```

### Approval Workflow
```typescript
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
```

### Rejection Workflow
```typescript
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
```

### Bulk Operations
```typescript
const handleBulkApprove = () => {
  setSongs(prev => prev.map(song =>
    selectedSongs.has(song.id) ? { ...song, status: 'approved' } : song
  ))
  setSelectedSongs(new Set())
}

const handleBulkReject = () => {
  setSongs(prev => prev.map(song =>
    selectedSongs.has(song.id)
      ? { ...song, status: 'rejected', rejectReason: 'Rejected via bulk action' }
      : song
  ))
  setSelectedSongs(new Set())
}
```

### Selection Management
```typescript
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
```

### Utility Functions
```typescript
const formatDuration = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}
```

## UI Component Usage

### Card Layout
```tsx
<Card key={song.id} className="overflow-hidden hover:shadow-lg transition-shadow">
  <CardHeader className="pb-4">
    <div className="flex items-start justify-between gap-2">
      {/* Content */}
    </div>
  </CardHeader>

  <CardContent className="space-y-4">
    {/* Content */}
  </CardContent>
</Card>
```

### Badge Status Display
```tsx
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
```

### Filter Tabs
```tsx
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
      {/* Tab label with count */}
    </button>
  ))}
</div>
```

### Audio Player
```tsx
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
```

### Action Buttons
```tsx
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
```

### Rejection Modal
```tsx
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
```

## Imports

### Core React
```typescript
import { useState, useMemo } from 'react'
```

### UI Components
```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
```

### Icons
```typescript
import { Search, CheckCircle, XCircle, RefreshCw } from "lucide-react"
```

## State Variables

```typescript
const [songs, setSongs] = useState<Song[]>(mockSongs)
const [filter, setFilter] = useState<FilterStatus>('pending')
const [searchQuery, setSearchQuery] = useState('')
const [selectedSongs, setSelectedSongs] = useState<Set<string>>(new Set())
const [showRejectModal, setShowRejectModal] = useState(false)
const [rejectingId, setRejectingId] = useState<string | null>(null)
const [rejectReason, setRejectReason] = useState('')
```

## Computed Values

```typescript
// Statistics
const stats = {
  pending: songs.filter(s => s.status === 'pending').length,
  approved: songs.filter(s => s.status === 'approved').length,
  rejected: songs.filter(s => s.status === 'rejected').length,
}

// Filtered list
const filteredSongs = useMemo(() => {
  // see function above
}, [songs, filter, searchQuery])
```

## CSS Classes Reference

### Responsive Grid
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

### Color Schemes
```
Pending: bg-yellow-100 text-yellow-800, border-primary text-primary
Approved: bg-green-100 text-green-800, bg-green-600 hover:bg-green-700
Rejected: bg-red-100 text-red-800, bg-red-600 hover:bg-red-700
```

### Spacing
```
mb-8: Large bottom margin
gap-4: Consistent gaps between elements
p-6: Padding inside cards
px-4 py-2: Button padding
```

### Effects
```
hover:shadow-lg transition-shadow: Hover effect on cards
transition-colors: Smooth color transitions
```

## Mock Data

### Creating Mock Songs
```typescript
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
  // ... more songs
]
```

## Integration Points

### Sidebar Navigation
In `/components/admin-sidebar.tsx`:
```typescript
import { Music } from "lucide-react"

const navItems = [
  // ... existing items
  { href: '/admin/canciones', icon: Music, label: 'Canciones' },
  // ... remaining items
]
```

### Admin Layout
The page uses existing admin layout from `/app/admin/layout.tsx`:
```typescript
<div className="min-h-screen flex bg-background">
  <DemoBanner />
  <AdminSidebar />
  <div className="flex-1 flex flex-col">
    <main className="flex-1 p-6 lg:p-8">
      {children}
    </main>
  </div>
</div>
```

## Database Schema (Future)

When connecting to backend, use this schema:
```sql
CREATE TABLE songs (
  id VARCHAR(36) PRIMARY KEY,
  athlete_id VARCHAR(36) NOT NULL,
  event_id VARCHAR(36) NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  file_size VARCHAR(20),
  duration INT,
  status ENUM('pending', 'approved', 'rejected'),
  reject_reason TEXT,
  upload_date DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (athlete_id) REFERENCES athletes(id),
  FOREIGN KEY (event_id) REFERENCES events(id)
);
```

## API Endpoints (Future)

```
GET  /api/admin/canciones - List songs
POST /api/admin/canciones/:id/approve - Approve song
POST /api/admin/canciones/:id/reject - Reject song
POST /api/admin/canciones/bulk/approve - Bulk approve
POST /api/admin/canciones/bulk/reject - Bulk reject
```

## Error Handling

Current implementation includes:
```typescript
// Audio player error handling
onError={() => console.log('Audio not available')}

// Rejection reason validation
disabled={!rejectReason.trim()}

// Safe state updates with optional chaining
if (rejectingId) { ... }
```

## Testing Examples

### Test Filtering
```typescript
// Should show only pending songs
filter = 'pending'
expect(filteredSongs).toHaveLength(8)

// Should show all songs
filter = 'all'
expect(filteredSongs).toHaveLength(15)
```

### Test Search
```typescript
// Should find songs by athlete name
searchQuery = 'Carlos'
expect(filteredSongs.some(s => s.athleteName === 'Carlos Martinez')).toBe(true)

// Should be case insensitive
searchQuery = 'carlos'
expect(filteredSongs).toContainEqual(expect.objectContaining({athleteName: 'Carlos Martinez'}))
```

### Test Actions
```typescript
// Approval should update status
handleApprove('1')
expect(songs.find(s => s.id === '1').status).toBe('approved')

// Rejection should add reason
handleRejectConfirm() // with rejectingId = '1' and rejectReason = 'Bad quality'
expect(songs.find(s => s.id === '1').rejectReason).toBe('Bad quality')
```

---

This reference guide covers all major code patterns, components, and integration points in the song approval page implementation.
