# Backstage Check-In System Documentation

**File Location:** `/app/admin/eventos/[id]/check-in/page.tsx`

**Created:** October 23, 2024

## Overview

A comprehensive check-in system for the IFBB Argentina event management platform. This system handles athlete registration verification, competitor number assignment, and real-time tracking at events.

## Key Features

### 1. QR Code Scanner Simulation
- **Button:** "Escanear QR del Atleta" in the header
- **Functionality:**
  - Shows mock camera view with animated loading state for 2 seconds
  - Automatically selects a random athlete from the queue
  - Opens the check-in modal immediately
  - Useful for tablet-based rapid check-in at event entrance

### 2. Manual Search
- **Input Field:** Search by name, email, or registration ID
- **Real-time Filtering:** Instant results as you type
- **Touch-Friendly:** Large input field optimized for tablet interfaces
- **Placeholder:** "Por nombre, email o ID de registro..."

### 3. Athlete Queue List
Displays all registered athletes in a responsive table with:
- **Columns:**
  - Checkbox (for bulk selection)
  - Photo (emoji avatar)
  - Athlete Name
  - Category (Men's Physique, Bikini, Bodybuilding, Figure, Classic Physique)
  - Check-In Status (Chequeado/Pendiente/Ausencia)
  - Competitor Number (assigned or blank)
  - Action Button (Ver to open check-in modal)

- **Filter Tabs:**
  - Todos (All) - All athletes
  - Chequeados (Checked-in) - 35 athletes
  - Pendientes (Pending) - 10 athletes
  - Ausencias (No-shows) - 3 athletes

- **Status Color Coding:**
  - Checked-in: Green badge
  - Pending: Gray/secondary badge
  - No-show: Red/destructive badge

### 4. Check-In Modal
When clicking "Ver" on an athlete or scanning a QR code, displays:

**Athlete Information Panel:**
- Large photo (emoji)
- Full name
- Registration ID
- Email address
- Category badge
- Payment status (Pagado/Pendiente)

**Competitor Number Assignment:**
- Input field for manual entry
- Auto-suggests next available number (1-100)
- Shows current available number below input
- Numbers persist in assignment grid

**Verification Checklist:**
- Music File Verified: Checkbox + status indicator
  - Shows filename if available
  - Yellow warning if missing
  - Green checkmark if present
- Photo Verified: Checkbox + visual confirmation
- ID/Document Verified: Checkbox for manual verification
- Waiver Signed: Checkbox for liability agreement

**Action Buttons:**
1. **Completar Check-In** (Green button)
   - Saves all checklist items
   - Assigns competitor number
   - Records check-in timestamp
   - Updates athlete status to "checked-in"

2. **Imprimir Sticker** (Outline button, appears after competitor number assigned)
   - Opens print preview
   - Shows large competitor number
   - Includes athlete name
   - Ready for thermal printer output

3. **Marcar Ausencia** (Red button)
   - Marks athlete as no-show
   - Removes from pending queue
   - Closes modal

### 5. Competitor Number Grid
**Visual Tracker (1-100):**
- 10 columns x 10 rows grid
- Green cells: Available numbers
- Gray cells: Already assigned
- Updates in real-time as assignments are made
- Located below the athletes table

### 6. Statistics Cards
Four prominent KPI cards at top of page:
- **Total Inscritos (Blue):** Total registered athletes = 48
- **Chequeados (Green):** Checked-in count + percentage = 35 (72.9%)
- **Pendientes (Yellow):** Awaiting check-in = 10
- **Ausencias (Red):** No-shows = 3

Each card includes:
- Large number display
- Icon (Users, CheckCircle, Clock, XCircle)
- Percentage or count information

### 7. Bulk Check-In
- **Checkbox Selection:** Select multiple athletes from the queue
- **Bulk Button:** "Check-In Masivo (N)" appears when athletes selected
- **Automatic Assignment:** Auto-assigns next available competitor numbers
- **Mass Verification:** All selected athletes checked-in simultaneously
- **Clear Selection:** Reset after bulk operation completes

### 8. Export to CSV
- **Button:** "Descargar CSV" in header
- **Content:**
  - Nombre (Name)
  - Email
  - Categoría (Category)
  - Estado (Check-in Status)
  - N° Competidor (Competitor Number)
  - Hora Check-In (Check-in Timestamp)
- **File Format:** Automatically downloads with timestamp
- **Filename:** `check-in-{timestamp}.csv`

### 9. Real-Time Updates
- Last check-in timestamp displays in header
- Updates whenever an athlete completes check-in
- Shows in format: HH:MM:SS
- Helpful for tracking event progress

## Mock Data Structure

### Sample Athletes (48 Total)
**Pre-checked-in (35):**
- Juan Pérez - Men's Physique - Number 1
- María García - Bikini - Number 2
- Carlos López - Bodybuilding - Number 3
- Plus 32 additional athletes with various categories

**Pending Check-In (10):**
- Ana Martínez - Figure - No number assigned
- Roberto Silva - Classic Physique - No number assigned
- Plus 8 additional athletes

**No-Shows (3):**
- Athletes automatically marked as absent
- No competitor numbers assigned

### Athlete Interface Structure:
```typescript
interface Athlete {
  id: string;                          // Unique identifier
  registrationId: string;              // REG001, REG002, etc.
  name: string;                        // Full name
  email: string;                       // Contact email
  category: string;                    // Competition category
  photo: string;                       // Emoji avatar
  musicFile: string | null;            // Song filename or null
  paymentStatus: 'paid' | 'pending';   // Payment verification
  checkInStatus: 'checked-in' | 'pending' | 'no-show';
  checkedInAt?: string;                // Timestamp of check-in
  competitorNumber?: number;           // 1-100 or undefined
  checklist: {
    musicVerified: boolean;
    photoVerified: boolean;
    idVerified: boolean;
    waiverSigned: boolean;
  };
}
```

## Technical Implementation

### State Management
- **athletes:** Full athlete roster with check-in status
- **searchQuery:** Current search filter text
- **selectedFilter:** Current tab filter (all/checked-in/pending/no-show)
- **selectedAthletes:** Set of IDs for bulk operations
- **selectedAthlete:** Currently open modal athlete
- **showModal:** Modal visibility toggle
- **showQRScanner:** QR scanner animation state
- **competitorNumber:** Competitor number being assigned
- **modalChecklist:** Verification checklist state
- **lastCheckInTime:** Timestamp of most recent check-in

### Key Functions

**getNextCompetitorNumber():**
- Scans used numbers 1-100
- Returns first available number
- Updates dynamically as athletes are assigned

**handleAthletClick(athlete):**
- Opens modal for specific athlete
- Pre-fills competitor number (existing or next available)
- Loads current checklist state

**handleCompleteCheckIn():**
- Updates athlete status to "checked-in"
- Saves competitor number
- Records timestamp
- Updates checklist state

**handleMarkNoShow():**
- Changes status to "no-show"
- Closes modal
- Removes from pending queue

**handleQRScan():**
- Simulates 2-second QR scanning animation
- Selects random athlete
- Triggers check-in modal

**handleBulkCheckIn():**
- Iterates selected athletes
- Auto-assigns consecutive numbers
- Marks all as checked-in
- Records timestamps

**handleExportCSV():**
- Formats athlete data as CSV
- Includes all relevant check-in info
- Downloads with timestamp filename

**handlePrintSticker():**
- Opens print preview window
- Shows large competitor number
- Displays athlete name
- Ready for thermal printer

## Styling & Layout

### Responsive Design
- Mobile-friendly breakpoints
- Tablet-optimized interface
- Large touch targets (minimum 44x44px)
- Landscape orientation support

### Color Scheme
**Status Colors:**
- Green: Checked-in / Available numbers
- Blue: Total statistics
- Yellow: Pending / Warnings
- Red: No-shows / Destructive actions
- Gray: Assigned competitor numbers

### Touch Optimization
- Large buttons (size="lg")
- Checkboxes with adequate spacing
- Input fields with 44px minimum height
- Modal with scroll support for long content
- Landscape-friendly layout

## User Workflow

### Typical Event Check-In Workflow

1. **Event Starts**
   - System displays all 48 registered athletes
   - Statistics show 0 checked-in, 48 pending

2. **First Athlete Arrives**
   - Click "Escanear QR del Atleta"
   - QR scanner simulates scan for 2 seconds
   - Modal opens with athlete details
   - System suggests competitor number 1
   - Staff verifies:
     - Music file present ✓
     - Photo on file ✓
     - ID checked ✓
     - Waiver signed ✓
   - Click "Completar Check-In"
   - Modal closes, athlete status changes to "Chequeado"

3. **Throughout Event**
   - Continue scanning or searching athletes
   - Assign competitor numbers (auto or manual)
   - Track progress via statistics cards
   - Monitor pending athletes in Pendientes tab
   - Mark absent athletes in Ausencias tab

4. **Bulk Operations (Optional)**
   - Select multiple pending athletes
   - Click "Check-In Masivo (N)"
   - All assigned consecutive numbers automatically
   - Useful for batch processing at event end

5. **Export Results**
   - Click "Descargar CSV"
   - Download contains final check-in status
   - Use for records/scoring system integration

## Competitor Number Grid

The 10x10 visual grid displays:
- All 100 possible competitor numbers
- Green cells: Available (1, 4, 5, etc. if 35 checked-in)
- Gray cells: Assigned (1, 2, 3, etc. for first 35)
- Updates automatically as numbers are assigned
- Useful quick reference for staff
- Helps prevent duplicate number assignment

## Print Sticker Feature

When athlete is checked-in with competitor number:
1. Click "Imprimir Sticker" button
2. Print preview opens in new window
3. Shows:
   - Large number (120px font)
   - Athlete name below
   - 300x300px print area
   - Black border for cutting
4. Can print to thermal printer for physical badges

## Search & Filter Features

**Search Bar:**
- Real-time filtering
- Searches across: Name, Email, Registration ID
- Case-insensitive
- Instant results

**Status Filter Tabs:**
- Each tab shows count
- Filters can be combined with search
- Resets to "All" on page load

**Bulk Selection:**
- Checkboxes in table
- "Select All" checkbox in header
- Enables bulk operations

## Key Metrics Tracked

1. **Total Athletes:** 48
2. **Checked-In:** 35 (72.9%)
3. **Pending:** 10 (20.8%)
4. **No-Shows:** 3 (6.3%)
5. **Assigned Numbers:** 35 (1-35)
6. **Available Numbers:** 65 (36-100)
7. **Last Check-In Time:** Real-time
8. **Average Check-In Rate:** Tracked via timestamps

## File Specifications

- **Language:** TypeScript with React
- **Type Safety:** Full TypeScript interfaces
- **State Management:** React hooks (useState, useCallback, useEffect)
- **Component Library:** Shadcn UI components
- **Icons:** Lucide React
- **Styling:** Tailwind CSS
- **Layout:** CSS Grid and Flexbox
- **File Size:** ~29KB (802 lines)
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)

## Tablet Optimization Features

1. **Large Touch Targets:** All buttons minimum 44x44px
2. **Landscape Support:** Layout adjusts for wide screens
3. **Input Heights:** Text fields 44-48px for easy tapping
4. **Spacing:** Adequate padding between interactive elements
5. **Font Sizes:** Large legible text (base 16px+)
6. **No Hover States:** Designed for touch, not mouse
7. **Scrollable Lists:** Handle large athlete counts
8. **Full-Screen Modal:** Modal uses available space

## Future Enhancement Ideas

1. **Real QR Code Integration:** Connect to actual QR code scanner device
2. **Database Persistence:** Save to backend database instead of mock data
3. **Real-Time Sync:** WebSocket updates for multiple check-in stations
4. **Barcode Scanner:** Alternative to QR scanning
5. **Photo Upload:** Capture/verify athlete photos at check-in
6. **Music File Verification:** Audio preview of registered songs
7. **Payment Verification:** Real-time payment status integration
8. **Email Notifications:** Send check-in confirmation emails
9. **SMS Notifications:** Text athlete when called to stage
10. **Analytics Dashboard:** Charts showing check-in trends
11. **Pre-Check-In:** Remote verification before event day
12. **Category Assignment:** Ensure athletes in correct categories

## Testing Checklist

- [ ] QR scanner animation displays for 2 seconds
- [ ] Random athlete selected after QR scan
- [ ] Search filters athletes by name/email/ID
- [ ] Filter tabs update athlete counts correctly
- [ ] Checkbox selection works for individual and bulk
- [ ] Competitor number auto-suggest increments correctly
- [ ] Competitor number grid updates in real-time
- [ ] Check-in modal displays all athlete information
- [ ] Checklist items can be toggled on/off
- [ ] Bulk check-in assigns consecutive numbers
- [ ] No-show marking removes athlete from pending
- [ ] CSV export downloads with correct data
- [ ] Print sticker opens print preview
- [ ] Statistics cards update after each check-in
- [ ] Last check-in time updates
- [ ] Table scrolls horizontally on mobile
- [ ] Modal scrolls vertically on small screens
- [ ] All colors display correctly in light/dark mode
- [ ] Touch targets are adequately sized
- [ ] Performance is smooth with 48 athletes

## Notes for Deployment

1. This is a mock implementation using simulated data
2. To connect to real data, replace `generateMockAthletes()` with API call
3. Remove mock check-in states and connect to backend
4. Implement real QR code scanning library
5. Add authentication checks (user must be event admin)
6. Add server-side logging of all check-in actions
7. Implement real-time WebSocket updates for multi-station environments
8. Add rate limiting to prevent duplicate check-ins
9. Store competitor number assignments persistently
10. Create backup system for offline check-in capability

---

**Version:** 1.0
**Status:** Complete Implementation
**Test Environment:** Ready
**Production Ready:** Pending real data integration
