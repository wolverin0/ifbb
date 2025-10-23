# Event Registration Flow - Complete Documentation

## Overview

A complete multi-step event registration/inscription system for athlete dashboard. The registration flow includes 5 steps with validation, file uploads, and mock payment processing.

### File Location
`/app/eventos/[id]/inscripcion/page.tsx`

### Route
`/eventos/[id]/inscripcion` (e.g., `/eventos/1/inscripcion`)

---

## Architecture

### Component Structure

```
EventRegistrationPage
├── Progress Indicator (Steps 1-5)
├── Step 1: Event & Category Selection
├── Step 2: Personal Information
├── Step 3: Music Upload
├── Step 4: Photo Upload
├── Step 5: Payment & Confirmation
├── Confirmation Page (Success State)
└── Navigation Controls
```

### State Management

Uses React `useState` for local state management:
- `currentStep`: Tracks which step the user is on (1-5)
- `isLoading`: Manages payment processing loading state
- `registrationComplete`: Boolean flag for confirmation page display
- `data`: Complete registration data object with all form fields

### Data Persistence

- Automatically saves registration data to `localStorage` after each change
- Loads saved data on component mount
- Clears localStorage on successful registration

---

## Step-by-Step Flow

### Step 1: Event & Category Selection

**Purpose**: Display event information and allow athlete to select categories

**Components**:
1. **Event Information Card**
   - Event date
   - Event location

2. **Category Selection**
   - Grid of all available categories
   - Each category shows:
     - Category name and class
     - Height/weight requirements
     - Price per category
   - Multiple selection allowed
   - Visual highlighting when selected

3. **Cost Summary**
   - Line items for each selected category
   - Registration fee (base fee: $2000)
   - Total amount calculation (dynamic)

4. **Reglamento (Rules)**
   - Rules text display
   - Acceptance checkbox required
   - PDF download link

**Validation**:
- At least one category must be selected
- Rules must be accepted
- Cannot proceed to Step 2 without meeting requirements

**Data Saved**:
- `selectedCategories`: Array of category IDs
- `acceptRules`: Boolean

---

### Step 2: Personal Information

**Purpose**: Collect athlete personal and physical data

**Form Fields**:
1. **Basic Information** (Required)
   - Full Name (text input, pre-filled)
   - Birth Date (date picker)
   - DNI/Passport (text input)
   - Phone Number (tel input)
   - Email (email input)

2. **Physical Measurements** (Required)
   - Height (slider: 150-210cm, increment 1cm)
   - Current Weight (slider: 50-150kg, increment 0.5kg)
   - Both sliders show real-time values

3. **Optional Information**
   - Gym/Team Name (text input)
   - Trainer Name (text input)

4. **Profile Save Option**
   - Checkbox to save data to profile

**Validation**:
- All required fields must be filled
- Valid email format
- Valid phone format
- Height and weight within reasonable ranges

**Data Saved**:
- `fullName`: String
- `birthDate`: Date string (YYYY-MM-DD)
- `dni`: String
- `height`: Number (cm)
- `weight`: Number (kg)
- `gym`: String
- `trainer`: String
- `phone`: String
- `email`: String
- `saveProfile`: Boolean

**Default Values** (for demo):
```javascript
fullName: 'Juan Pérez'
birthDate: '1990-05-15'
dni: '12345678'
height: 175
weight: 85
gym: 'Gold Gym CABA'
trainer: 'Carlos López'
phone: '1123456789'
email: 'juan@email.com'
saveProfile: true
```

---

### Step 3: Music Upload

**Purpose**: Upload posing music for the competition

**Features**:
1. **Upload Area**
   - Drag and drop zone
   - Click to select file
   - Visual feedback on hover

2. **File Requirements** (Alert Box)
   - Maximum duration: 60 seconds
   - Formats: MP3, WAV
   - Max file size: 3MB
   - No explicit content
   - Naming format: [LastName]_[Category].mp3

3. **Music File Display** (After Upload)
   - File name and size
   - Audio player with controls
   - Replace button (upload different file)
   - Delete button (remove file)

4. **Additional Options**
   - Song title field (optional)
   - "Use music from previous event" button (future feature)

**Validation**:
- File size check (max 3MB)
- File type validation (MP3/WAV only)
- Optional field (can skip to next step)

**File Upload Handler**:
```typescript
handleMusicUpload(file: File | null)
- Checks file size
- Validates MIME type
- Stores file reference
```

**Data Saved**:
- `musicFile`: File object or null
- `musicTitle`: String (optional)

---

### Step 4: Photo Upload

**Purpose**: Upload identification/posing photo

**Features**:
1. **Upload Area**
   - Drag and drop zone
   - Click to select
   - Aspect ratio display

2. **Photo Requirements** (Alert Box)
   - Recent photo (last 30 days)
   - Clear or white background
   - Front relaxed pose or required posing
   - Formats: JPG, PNG
   - Max file size: 5MB

3. **Image Preview**
   - Shows uploaded image
   - Replace button
   - Delete button

**Validation**:
- File size check (max 5MB)
- File type validation (JPG/PNG only)
- Optional field (can skip to next step)

**Image Processing**:
- Reads file as Data URL
- Displays preview immediately
- Stores both file and preview

**Data Saved**:
- `photoFile`: File object or null
- `photoPreview`: Data URL string or null

---

### Step 5: Payment & Confirmation

**Purpose**: Review registration and process payment

**Sections**:

1. **Registration Summary Card**
   - Event name and date
   - Selected categories with prices
   - Registration fee
   - Total amount (bold, prominent)

2. **Payment Methods** (Radio Group)
   - **MercadoPago**: Shows QR code placeholder
   - **Credit/Debit Card**: Shows form fields
     - Card number
     - Expiration (MM/YY)
     - CVV
     - Cardholder name
   - **Bank Transfer**: Shows bank details
     - Bank name
     - CBU
     - Account holder

3. **Terms & Conditions**
   - Acceptance of participation terms
   - Refund policy (7-day restriction)
   - Image/video usage authorization
   - All three must be checked to proceed

4. **Security Badge**
   - SSL encryption notice

**Payment Processing**:
- Simulates 2-second payment delay
- Sets `registrationComplete` to true on success
- Shows confirmation page

**Data Saved**:
- `paymentMethod`: 'mercadopago' | 'card' | 'transfer'
- `acceptTerms`: Boolean
- `acceptRefund`: Boolean
- `acceptImages`: Boolean

---

## Confirmation Page

**Display Trigger**: `registrationComplete === true`

**Elements**:

1. **Success Header**
   - Gold circle with checkmark icon
   - "¡Inscripción Confirmada!" heading
   - Success message

2. **Confirmation Card**
   - Unique confirmation number (IFBB-2025-XXXXX)
   - QR code placeholder (for check-in)
   - Event name and date
   - List of all selected categories with prices
   - Total amount

3. **Timeline**
   - Vertical timeline showing:
     - ✅ Registration confirmed (today)
     - ⏳ Music/photo review (24-48 hours)
     - ⏳ Weigh-in (date/time)
     - 🏆 Competition (date/time)

4. **Action Buttons**
   - Download receipt (outline button)
   - Go to My Events (primary button - links to `/dashboard/mis-eventos`)

**Data Display**:
- Shows athlete information from registration
- Displays selected categories
- Shows payment total
- Provides next steps timeline

---

## Feature Highlights

### 1. Progress Indicator
- Visual step counter (1-5)
- Current step highlighted in gold gradient
- Completed steps show checkmarks
- Connecting lines between steps
- Step labels below

### 2. Form Validation
- Real-time validation
- Prevents next step if incomplete
- Clear error messages in Spanish
- Required field indicators (*)

### 3. File Upload with Validation
- Drag and drop support
- File size limits enforced
- File type validation
- Preview display
- Replace/delete functionality

### 4. Responsive Design
- Mobile-first approach
- Grid layouts adapt to screen size
- Touch-friendly buttons
- Full-width on mobile
- Optimized for tablets and desktop

### 5. Styling
- Premium dark theme (IFBB brand colors)
- Gold accents (#B78B1E, #FFD700)
- Dark backgrounds (#0B0B0F, #1a1a1f)
- Smooth transitions
- Gradient buttons
- Glass-morphism cards

### 6. User Experience
- Saves progress automatically
- Smooth step transitions
- Loading states for payment
- Clear validation feedback
- Accessible form elements
- Keyboard navigation support

---

## Mock Data

### Event Data Structure
```typescript
{
  id: string
  title: string
  date: string
  location: string
  categories: Array<{
    id: string
    name: string
    description: string
    price: number
    weight: string
    height: string
  }>
  registrationFee: number
}
```

### Current Mock Event
```javascript
{
  title: 'Campeonato Nacional IFBB Argentina 2025'
  date: '15 de Marzo, 2025'
  location: 'Teatro Gran Rex'
  registrationFee: 2000
  categories: [
    Men's Physique (Classes A, B, C) - $1500 each
    Bodybuilding (Weight classes) - $1500 each
    Women Bikini - $1500
    Women Wellness - $1500
    Masters 40+ - $2000
    Junior - $1200
  ]
}
```

---

## Price Calculation

### Formula
```
Total = (Sum of selected category prices) + Registration Fee
Total = Σ(category.price) + 2000
```

### Example
```
Selected: Men's Physique A ($1500) + Bodybuilding Lightweight ($1500)
Registration Fee: $2000
Total: $1500 + $1500 + $2000 = $5000
```

---

## Navigation

### Between Steps
- **Next Button**: Validates current step and moves forward
- **Previous Button**: Returns to previous step (disabled on Step 1)
- **Save & Continue Later**: Saves to localStorage (preserves progress)

### To External Pages
- Links to `/dashboard/mis-eventos` from confirmation page
- Rules PDF download (placeholder)

---

## localStorage Keys

- `eventRegistration`: Complete registration data object
- Automatically cleared on successful registration

---

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- File API support required
- FileReader API for image preview
- localStorage support required

---

## Accessibility Features

- Semantic HTML structure
- ARIA labels for form inputs
- Keyboard navigation support
- Color contrast compliance
- Focus indicators
- Alt text for images
- Error messages linked to inputs

---

## Future Enhancements

1. **Image Cropping**: Add image crop functionality in Step 4
2. **Audio Duration Check**: Validate audio duration before upload
3. **Category Auto-Suggest**: Auto-suggest categories based on height/weight
4. **Payment Integration**: Real integration with MercadoPago API
5. **Email Confirmation**: Send confirmation email after registration
6. **QR Generation**: Generate actual QR codes for check-in
7. **Document Upload**: Support additional document uploads
8. **Real-time Availability**: Check category availability as athlete selects
9. **Previous Event Data**: Load data from previous registrations
10. **Multi-language**: Add support for English/Portuguese

---

## Testing Checklist

- [ ] All form fields validate correctly
- [ ] Can select multiple categories
- [ ] Price calculation updates dynamically
- [ ] File uploads with size validation
- [ ] Photo preview displays correctly
- [ ] Audio player works for music files
- [ ] Payment methods toggle properly
- [ ] All checkboxes are required before confirming
- [ ] localStorage saves and restores data
- [ ] Confirmation page displays after success
- [ ] Navigation buttons work correctly
- [ ] Responsive design on mobile/tablet
- [ ] Error messages display in Spanish
- [ ] Loading state shows during payment
- [ ] Back button disabled on Step 1

---

## API Integration Points (Future)

```typescript
// Step 1 - Validate Categories
POST /api/eventos/{id}/categories

// Step 2 - Save Personal Info
POST /api/athletes/{id}/personal-info

// Step 3 - Upload Music
POST /api/registrations/{id}/music
(multipart/form-data)

// Step 4 - Upload Photo
POST /api/registrations/{id}/photo
(multipart/form-data)

// Step 5 - Process Payment
POST /api/payments/mercadopago
POST /api/payments/card
POST /api/payments/transfer

// Confirmation
POST /api/registrations/{id}/confirm
```

---

## Styling Classes

### Colors
- Primary Gold: `#B78B1E`
- Light Gold: `#FFD700`
- Dark Background: `#0B0B0F`
- Card Background: `#1a1a1f`
- Border Color: `#2a2a2f`

### Tailwind Custom Classes
- `bg-[#B78B1E]`: Gold background
- `text-[#B78B1E]`: Gold text
- `border-[#B78B1E]`: Gold border
- `hover:bg-[#B78B1E]/10`: Subtle gold hover

---

## Known Limitations

1. Payment processing is mocked (2-second delay)
2. QR codes are placeholder graphics
3. File uploads don't persist (client-side only)
4. No image cropping functionality
5. Audio duration not validated
6. Categories are hardcoded (not dynamic from API)
7. No real email verification
8. No PDF generation for receipts

---

## Performance Optimizations

- Lazy loading of form inputs
- Memoized category calculations
- Efficient state updates
- localStorage serialization
- Image preview with Data URL (no server upload)

---

## Support

For issues or enhancements, please refer to the requirements and extend this implementation accordingly.
