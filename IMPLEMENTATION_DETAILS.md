# IFBB Argentina Components - Implementation Details

## File Locations & Sizes

```
components/
├── testimonials-section.tsx (7.1 KB)
├── faq-section.tsx (8.8 KB)
├── whatsapp-contact.tsx (2.0 KB)
└── ... (existing components)

app/
└── page.tsx (Updated - 244 lines)
```

---

## Key Code Snippets

### 1. Testimonials Section - Carousel Logic

```typescript
const goToPrevious = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  setIsAutoPlay(false)
}

const goToNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  setIsAutoPlay(false)
}
```

### 2. FAQ Section - Toggle Logic

```typescript
const toggleItem = (id: number) => {
  setOpenItems((prev) =>
    prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
  )
}
```

### 3. WhatsApp Button - Dynamic Link Generation

```typescript
const whatsappNumber = "+541137234567"
const whatsappMessage = "Hola, tengo una consulta sobre IFBB Argentina"
const cleanNumber = whatsappNumber.replace(/\D/g, "")
const whatsappLink = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsappMessage)}`
```

---

## Component States & Props

### TestimonialsSection
- **State:** `currentIndex`, `isAutoPlay`
- **Props:** None (data is internal)
- **Data Structure:**
  ```typescript
  interface Testimonial {
    id: number
    name: string
    achievement: string
    quote: string
    image: string
    category: string
    year: number
  }
  ```

### FAQSection
- **State:** `openItems` (array of open FAQ IDs)
- **Props:** None
- **Data Structure:**
  ```typescript
  interface FAQItem {
    id: number
    question: string
    answer: string
    category: string
  }
  ```

### WhatsAppContact
- **State:** `isHovered`
- **Props:** None
- **Configuration:** WhatsApp number as constant

---

## Styling Breakdown

### Testimonials Glass Card
```typescript
className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden"
```
- Glass effect with blur and transparency
- Padding responsive (8 on mobile, 12 on tablet+)
- Border radius 3xl (24px)

### FAQ Accordion Button
```typescript
className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#B78B1E]/5 transition-colors"
```
- Full width for clickable area
- Gold hover background (5% opacity)
- Smooth color transition

### WhatsApp Button
```typescript
className={`relative w-16 h-16 rounded-full bg-gradient-to-r from-[#25D366] to-[#20BA58] shadow-lg flex items-center justify-center transition-all duration-300 transform ${
  isHovered ? "scale-110 shadow-2xl" : "scale-100"
} hover:shadow-xl`}
```
- Fixed size (4rem x 4rem)
- Green gradient
- Scale transform on hover (110%)
- Shadow elevation

---

## Animation Effects

### Testimonials
- **Carousel:** Instant slide change on button click
- **Dots:** Smooth width/opacity transition (300ms)
- **Overall:** No slide animation (instant), navigation is instant

### FAQ
- **Expand:** `animate-in fade-in slide-in-from-top-2 duration-300`
- **Icon:** ChevronDown rotates 180deg (300ms)
- **Color:** Hover background transition (smooth)

### WhatsApp Button
- **Pulse:** `animate-pulse` on background div
- **Hover:** Scale 110% with shadow elevation (300ms)
- **Tooltip:** `animate-in fade-in slide-in-from-bottom-2 duration-200`

---

## Responsive Behavior

### Testimonials Section
```typescript
<div className="flex flex-col md:flex-row gap-8 items-center">
  <div className="flex-shrink-0 w-full md:w-1/3">
    {/* Image - 100% on mobile, 33% on md+ */}
  </div>
  <div className="flex-1">
    {/* Text - 100% on mobile, remaining space on md+ */}
  </div>
</div>
```

### FAQ Section
```typescript
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* Contact buttons stack on mobile, row on tablet+ */}
</div>
```

### WhatsApp Button
```typescript
<style jsx>{`
  @media (max-width: 768px) {
    [aria-label="Contact via WhatsApp"] {
      bottom: 6rem;  /* Higher on mobile to avoid navbar */
    }
  }
`}</style>
```

---

## Accessibility Features

### ARIA Labels
```typescript
aria-label="Previous testimonial"
aria-label="Next testimonial"
aria-label="Go to testimonial {index + 1}"
aria-label="Contact via WhatsApp"
```

### Keyboard Navigation
- Testimonial buttons: Fully keyboard accessible
- FAQ items: Clickable buttons with proper focus states
- WhatsApp link: Focus ring styling `focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]`

### Semantic HTML
- Buttons for interactive elements
- Proper heading hierarchy (h2, h3)
- Links with target="_blank" and rel="noopener noreferrer"

---

## Integration Points in page.tsx

### Import Statements
```typescript
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { WhatsAppContact } from "@/components/whatsapp-contact"
```

### Component Placement
```typescript
{/* Instagram & Social Media Section */}
<InstagramFeed />

{/* Testimonials Section */}
<TestimonialsSection />

{/* FAQ Section */}
<FAQSection />

{/* WhatsApp Floating Button */}
<WhatsAppContact />

<Footer />
```

---

## Color References

### Gold Theme
- Primary Gold: `#B78B1E`
- Light Gold: `#FBBF24`
- Dark Gold: `#A67A1A`
- Uses in: Buttons, badges, borders, text accents

### WhatsApp Green
- Primary Green: `#25D366`
- Dark Green: `#20BA58`
- Used for: Floating button gradient

### Glass Effect Colors
- From globals.css: `bg-card / 0.6` with `backdrop-filter: blur(12px)`
- Border: `border-primary / 0.1` (#B78B1E at 10% opacity)

---

## Performance Considerations

### Component Optimization
1. **TestimonialsSection:**
   - Minimal re-renders (only on index change)
   - No API calls
   - Static testimonial data

2. **FAQSection:**
   - useState for accordion state
   - No external data fetching
   - Category filtering on render

3. **WhatsAppContact:**
   - Single hover state
   - No performance impact
   - Fixed positioning (GPU accelerated)

### Image Optimization
- Testimonials use image paths (need to be optimized)
- Consider using Next.js Image component for production:
  ```typescript
  import Image from 'next/image'
  <Image src={path} alt={name} width={300} height={300} />
  ```

---

## Browser Support

### CSS Features Used
- `backdrop-filter` - Modern browsers (consider fallback)
- `gradient-to-*` - Tailwind (Autoprefixed)
- `animate-*` - Tailwind animations
- `transform` - Widely supported

### Fallback Strategies
- Glass-card without backdrop-filter: Still shows background color
- Gradients: Fallback to solid colors
- Animations: Hardware accelerated where possible

---

## Data Management

### Testimonials Data Structure
```typescript
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Juan Pérez",
    achievement: "Mr. Olympia Argentina 2024",
    quote: "...",
    image: "/athletes/juan-perez.jpg",
    category: "Clásico",
    year: 2024,
  },
  // ... more testimonials
]
```

### FAQ Data Structure
```typescript
const faqs: FAQItem[] = [
  {
    id: 1,
    category: "Inscripción",
    question: "¿Cómo me inscribo en una competencia?",
    answer: "...",
  },
  // ... more FAQs
]
```

---

## Customization Hooks

### Add New Testimonial
1. Add object to `testimonials` array
2. Include: id, name, achievement, quote, image, category, year
3. Component auto-updates carousel

### Add New FAQ
1. Add object to `faqs` array
2. Include: id, category, question, answer
3. Component auto-groups by category

### Change WhatsApp Number
1. Edit `whatsappNumber` in `whatsapp-contact.tsx`
2. Update phone number with country code
3. Test WhatsApp link generation

### Modify Colors
Search for color hex codes:
- `#B78B1E` - Gold
- `#25D366` - WhatsApp green
Replace with new colors throughout files

---

## Testing Checklist

### Unit Testing (Recommended)
- [ ] TestimonialsSection carousel navigation
- [ ] FAQSection accordion toggle
- [ ] WhatsAppContact link generation

### Integration Testing
- [ ] All components render in page.tsx
- [ ] Navigation between sections smooth
- [ ] WhatsApp button doesn't overlap content

### E2E Testing
- [ ] Click testimonial navigation
- [ ] Expand/collapse FAQ items
- [ ] Click WhatsApp button opens link
- [ ] Mobile responsive layout
- [ ] Dark mode display

---

## Deployment Notes

1. **Image Paths:**
   - Verify athlete images exist in `/public/athletes/`
   - Update paths if different directory structure

2. **WhatsApp Number:**
   - Update placeholder number before launch
   - Test link generation manually

3. **Email Links:**
   - Update email addresses in FAQ section
   - Verify inbox for test messages

4. **Analytics:**
   - Track FAQ section clicks
   - Monitor WhatsApp button clicks
   - Measure testimonial carousel engagement

---

## Future Enhancement Ideas

1. **Testimonials:**
   - Auto-advance carousel on timer
   - Add video testimonials
   - Rating/review system

2. **FAQ:**
   - Search functionality
   - Filter by category
   - Analytics on popular questions

3. **WhatsApp:**
   - Different messages by page section
   - Pre-filled form options
   - Chat history integration

4. **General:**
   - Database-driven content
   - Admin panel for updates
   - Multi-language support

