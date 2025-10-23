# Event Registration - Quick Start Guide

## Live Demo

### Access the Registration Flow
```
URL: http://localhost:3000/eventos/1/inscripcion
```

### Run Development Server
```bash
cd "/mnt/g/_OneDrive/OneDrive/Desktop/Py Apps/ifbb-argentina"
npm run dev
```

Then open: `http://localhost:3000/eventos/1/inscripcion`

---

## Quick Test Walkthrough

### Step 1: Event & Category Selection (2-3 minutes)
1. **View Event Details**
   - See event name: "Campeonato Nacional IFBB Argentina 2025"
   - See event date: "15 de Marzo, 2025"
   - See location: "Teatro Gran Rex"

2. **Select Categories**
   - Click on any category box to select (e.g., "Men's Physique - Clase A")
   - Notice the gold highlighting when selected
   - Price updates in the summary card below
   - Try selecting multiple categories

3. **View Cost Summary**
   - Each selected category shows price ($1500-$2000)
   - Registration fee shows: $2000
   - Total updates dynamically
   - Example: 2 categories = $1500 + $1500 + $2000 = $5000

4. **Accept Rules**
   - Read the rules text
   - Check the "Acepto el reglamento de la competencia" checkbox
   - Click "Download PDF Completo" (placeholder link)

5. **Proceed to Step 2**
   - Click the gold "Siguiente" button
   - Progress indicator updates (Step 1 shows checkmark)

### Step 2: Personal Information (2-3 minutes)
1. **Fill Form Fields**
   - Name: Pre-filled with "Juan Pérez" (editable)
   - Birth Date: Pre-filled with "1990-05-15" (editable)
   - DNI: Pre-filled with "12345678" (editable)
   - Phone: Pre-filled with "1123456789" (editable)
   - Email: Pre-filled with "juan@email.com" (editable)

2. **Adjust Measurements**
   - Height slider: Drag to change (150-210cm range)
   - Watch value update in real-time
   - Weight slider: Drag to change (50-150kg range)
   - Watch value update in real-time

3. **Optional Fields**
   - Gym: Pre-filled with "Gold Gym CABA"
   - Trainer: Pre-filled with "Carlos López"

4. **Save to Profile**
   - Checkbox is checked by default
   - Can uncheck if you don't want to save

5. **Proceed to Step 3**
   - Click "Siguiente" button
   - All required fields are filled by default (demo mode)

### Step 3: Music Upload (2-3 minutes)
1. **View Requirements**
   - Max duration: 60 seconds
   - Formats: MP3, WAV
   - Max file: 3MB
   - Naming: [LastName]_[Category].mp3

2. **Upload Music (Two Options)**
   - **Option A**: Drag & drop an MP3/WAV file onto the dashed box
   - **Option B**: Click the dashed area to open file picker
   - Select an audio file from your computer

3. **After Upload**
   - File name and size display
   - Audio player appears with play/pause controls
   - "Reemplazar" (Replace) button to change file
   - "Eliminar" (Delete) button to remove file

4. **Add Title** (Optional)
   - Enter song title (e.g., "Pérez_Men's Physique A")

5. **Skip or Use Previous**
   - Can skip music upload and proceed
   - Or click "Usar Música del Evento Anterior" (future feature)

6. **Proceed to Step 4**
   - Click "Siguiente" button
   - Music upload is optional (can skip)

### Step 4: Photo Upload (2-3 minutes)
1. **View Requirements**
   - Recent photo (last 30 days)
   - Clear/white background
   - Front pose or required posing
   - Formats: JPG, PNG
   - Max file: 5MB

2. **Upload Photo (Two Options)**
   - **Option A**: Drag & drop an image onto the dashed box
   - **Option B**: Click the dashed area to open file picker
   - Select a JPG/PNG image from your computer

3. **After Upload**
   - Image preview displays
   - "Reemplazar" (Replace) button to change photo
   - "Eliminar" (Delete) button to remove photo

4. **Proceed to Step 5**
   - Click "Siguiente" button
   - Photo upload is optional (can skip)

### Step 5: Payment & Confirmation (3-5 minutes)
1. **Review Summary**
   - Event name and date
   - All selected categories with prices
   - Registration fee
   - Total amount prominently displayed

2. **Select Payment Method** (Choose One)
   - **MercadoPago**: Shows QR code placeholder
     - Click radio button to see QR
   - **Credit/Debit Card**: Shows form fields
     - Card number input
     - Expiration (MM/AA) input
     - CVV input
     - Cardholder name input
   - **Bank Transfer**: Shows bank details
     - Banco Credicoop
     - CBU: 1430003470108200000000
     - Account: IFBB Argentina

3. **Accept Terms** (All Required)
   - Check "Acepto los términos y condiciones..."
   - Check "Acepto la política de devoluciones..."
   - Check "Autorizo el uso de mis imágenes/videos..."
   - All three must be checked

4. **SSL Security**
   - See "Pago seguro - SSL encriptado" notice

5. **Process Payment**
   - Click the gold "Confirmar Inscripción" button
   - Shows loading spinner and "Procesando..."
   - Simulates 2-second payment processing
   - Displays confirmation page

### Confirmation Page (Final Step)
1. **Success Message**
   - Large checkmark in gold circle
   - "¡Inscripción Confirmada!" heading
   - Success confirmation text

2. **Confirmation Details**
   - Unique confirmation number (e.g., IFBB-2025-ABC12)
   - QR code placeholder
   - Event name and date
   - List of selected categories with prices
   - Total amount

3. **Next Steps Timeline**
   - ✅ Registration confirmed (today)
   - ⏳ Music/photo review (24-48 hours)
   - ⏳ Weigh-in (14 de Marzo, 2025 - 14:00)
   - 🏆 Competition (15 de Marzo, 2025)

4. **Action Buttons**
   - "Descargar Comprobante" (Download Receipt) - outline button
   - "Mis Eventos" (My Events) - primary gold button (links to dashboard)

---

## Testing Validation

### Step 1 Validation Test
1. Don't select any category
2. Try clicking "Siguiente"
3. Should see alert: "Por favor completa todos los campos requeridos."
4. Repeat without checking rules checkbox

### Step 2 Validation Test
1. Clear the Name field
2. Try clicking "Siguiente"
3. Should see alert about required fields
4. Clear other required fields and test
5. Test height/weight sliders move smoothly

### File Upload Tests

#### Music Upload
1. Try uploading a non-audio file (e.g., PDF)
2. Should show error: "Formato no válido. Solo MP3 y WAV."
3. Try uploading a file > 3MB
4. Should show error: "El archivo es muy grande. Máximo 3MB."
5. Upload valid MP3/WAV file
6. Should display file with audio player

#### Photo Upload
1. Try uploading non-image file
2. Should show error: "Formato no válido. Solo JPG y PNG."
3. Try uploading file > 5MB
4. Should show error: "El archivo es muy grande. Máximo 5MB."
5. Upload valid JPG/PNG file
6. Should display preview image

### Payment Method Test
1. Select each payment method option
2. Observe different content display for each:
   - MercadoPago: QR code appears
   - Credit Card: Form fields appear
   - Bank Transfer: Bank details appear

### Payment Processing
1. Don't check all three terms
2. Try clicking "Confirmar Inscripción"
3. Should see alert: "Por favor acepta todos los términos y condiciones."
4. Check all three terms
5. Click "Confirmar Inscripción"
6. Should see loading spinner for ~2 seconds
7. Should display confirmation page

### localStorage Test
1. Fill out Step 1 partially
2. Refresh the page (F5)
3. Data should be restored from localStorage
4. Complete registration
5. Check localStorage (cleared on success)

### Navigation Test
1. Go through multiple steps
2. Click "Anterior" button
3. Should go back to previous step
4. Data should be preserved
5. On Step 1, "Anterior" button should be disabled

---

## Browser DevTools Testing

### Check localStorage
```javascript
// In browser console
localStorage.getItem('eventRegistration')
// Shows JSON object with all registration data
```

### View Component State
- React DevTools browser extension
- Inspect component props and state
- Monitor re-renders

### Network Testing
- Simulate slow network (DevTools > Network tab)
- Watch 2-second payment delay
- See loading spinner work

### Mobile Testing
- DevTools > Toggle device toolbar (Ctrl+Shift+M)
- Test on iPhone/iPad sizes
- Verify responsive layout
- Check touch interactions

---

## Demo Scenarios

### Scenario 1: Quick Registration
Time: ~5 minutes
1. Step 1: Select 1 category, accept rules, next
2. Step 2: All fields pre-filled, next
3. Step 3: Skip music, next
4. Step 4: Skip photo, next
5. Step 5: Select payment, accept all, confirm
6. View confirmation page

### Scenario 2: Full Registration
Time: ~10 minutes
1. Step 1: Select multiple categories, review costs
2. Step 2: Modify some fields (height, weight, name)
3. Step 3: Upload actual MP3 file
4. Step 4: Upload actual JPG/PNG photo
5. Step 5: Try different payment methods
6. Process payment and view confirmation

### Scenario 3: Error Testing
Time: ~5 minutes
1. Test validation errors at each step
2. Test file upload errors (wrong type, too large)
3. Try proceeding without meeting requirements
4. Test all error messages display correctly

---

## File Size Limits for Testing

### Music Files
- Min: Any audio file (testing)
- Max: 3MB
- Formats: MP3, WAV
- Test files: Use sample MP3/WAV from your computer

### Photo Files
- Min: Any image file (testing)
- Max: 5MB
- Formats: JPG, PNG
- Test files: Use any photo from your computer

---

## Expected Pricing Examples

| Categories Selected | Price per Category | Registration Fee | Total |
|---|---|---|---|
| 1 x Men's Physique A | $1500 | $2000 | $3500 |
| 2 x Men's Physique | $3000 | $2000 | $5000 |
| Men's + Bodybuilding | $3000 | $2000 | $5000 |
| Masters 40+ | $2000 | $2000 | $4000 |
| Junior | $1200 | $2000 | $3200 |
| Multiple (3+) | Varies | $2000 | Varies |

---

## Responsive Breakpoints

### Mobile (< 768px)
- Full-width layout
- Stack inputs vertically
- Buttons wrap or resize
- Touch-friendly sizes
- Single-column categories

### Tablet (768px - 1024px)
- 2-column grid for some inputs
- Wider category cards
- Proportional spacing

### Desktop (> 1024px)
- Multi-column layouts
- Optimized spacing
- Side-by-side form groups
- Full-width button bar

---

## Troubleshooting

### Page Won't Load
- Check URL: `http://localhost:3000/eventos/1/inscripcion`
- Ensure dev server is running: `npm run dev`
- Check console for errors (F12)

### Form Data Not Saving
- Check localStorage (DevTools > Application > localStorage)
- Verify browser allows localStorage
- Private/incognito mode may prevent localStorage

### File Upload Not Working
- Check file type (must be MP3/WAV for audio, JPG/PNG for images)
- Check file size (< 3MB for audio, < 5MB for photos)
- Ensure browser supports File API

### Payment Not Processing
- Check that all three terms are checked
- Wait for 2-second processing delay
- Check for any browser console errors

### Mobile Layout Broken
- Clear browser cache (Ctrl+Shift+Delete)
- Test in different mobile browsers
- Check viewport meta tags in HTML head

---

## Feature Checklist

### Completed Features
- [x] 5-step registration wizard
- [x] Progress indicator with step counter
- [x] Event information display
- [x] Multi-category selection
- [x] Dynamic price calculation
- [x] Personal information form
- [x] Height/weight sliders
- [x] Music file upload with validation
- [x] Photo file upload with preview
- [x] Three payment methods
- [x] Terms acceptance checkboxes
- [x] Form validation at each step
- [x] localStorage persistence
- [x] Loading state for payment
- [x] Confirmation page with timeline
- [x] Responsive design
- [x] Premium styling

### Future Features
- [ ] Real MercadoPago integration
- [ ] Image cropping tool
- [ ] Audio duration validation
- [ ] Email confirmation
- [ ] PDF receipt generation
- [ ] Real QR code generation
- [ ] Category auto-suggestion
- [ ] Previous event data loading
- [ ] Multi-language support
- [ ] API backend integration

---

## Support & Help

- **File Location**: `/app/eventos/[id]/inscripcion/page.tsx`
- **Documentation**: `EVENT_REGISTRATION_GUIDE.md`
- **Quick Start**: This file
- **Build Status**: Run `npm run build` to verify

---

## Next Steps

1. Test the registration flow end-to-end
2. Gather feedback from stakeholders
3. Integrate with real backend APIs
4. Implement MercadoPago payment gateway
5. Add email notifications
6. Generate PDF receipts
7. Create admin review interface for submissions
8. Add more validation and error handling
9. Implement image cropping tool
10. Create athlete dashboard to view registrations
