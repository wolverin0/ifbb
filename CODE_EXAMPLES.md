# Code Examples - IFBB Argentina Components

## Testimonials Section - Key Features

### Carousel Navigation Logic
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

### Data Structure
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

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Juan Pérez",
    achievement: "Mr. Olympia Argentina 2024",
    quote: "Gracias a IFBB Argentina pude competir a nivel internacional y representar con orgullo a nuestro país en Mr. Olympia. La plataforma hizo todo más simple y profesional.",
    image: "/athletes/juan-perez.jpg",
    category: "Clásico",
    year: 2024,
  },
  // ... more testimonials
]
```

### Gold-Framed Photo Component
```typescript
<div className="relative">
  {/* Gold Border/Frame */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#B78B1E] to-[#FBBF24] rounded-2xl p-1 transform -rotate-2">
    <div className="w-full h-full bg-[#0B0B0F] rounded-2xl" />
  </div>
  {/* Image */}
  <div className="relative rounded-2xl overflow-hidden">
    <img
      src={currentTestimonial.image}
      alt={currentTestimonial.name}
      className="w-full h-80 object-cover"
    />
  </div>
</div>
```

---

## FAQ Section - Key Features

### Accordion Toggle Logic
```typescript
const toggleItem = (id: number) => {
  setOpenItems((prev) =>
    prev.includes(id) 
      ? prev.filter((item) => item !== id) 
      : [...prev, id]
  )
}
```

### Category Organization
```typescript
const categories = Array.from(new Set(faqs.map((item) => item.category)))

{categories.map((category) => {
  const categoryFaqs = faqs.filter((item) => item.category === category)
  return (
    <div key={category} className="mb-12">
      <h3 className="text-2xl font-bold text-[#B78B1E] mb-6">
        {category}
      </h3>
      {categoryFaqs.map((faq) => (
        // FAQ item component
      ))}
    </div>
  )
})}
```

### FAQ Item with Accordion
```typescript
<div className="glass-card rounded-xl overflow-hidden">
  <button
    onClick={() => toggleItem(faq.id)}
    className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#B78B1E]/5"
  >
    <span>{faq.question}</span>
    <ChevronDown
      className={`transition-transform duration-300 ${
        openItems.includes(faq.id) ? "rotate-180" : ""
      }`}
    />
  </button>
  
  {openItems.includes(faq.id) && (
    <div className="px-6 pb-4 animate-in fade-in slide-in-from-top-2">
      <p className="text-muted-foreground">{faq.answer}</p>
    </div>
  )}
</div>
```

### FAQ Data Structure
```typescript
interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    category: "Inscripción",
    question: "¿Cómo me inscribo en una competencia?",
    answer: "Para inscribirte, primero debes crear una cuenta en la plataforma...",
  },
  // ... more FAQs
]
```

---

## WhatsApp Contact - Key Features

### Dynamic Link Generation
```typescript
const whatsappNumber = "+541137234567"
const whatsappMessage = "Hola, tengo una consulta sobre IFBB Argentina"
const cleanNumber = whatsappNumber.replace(/\D/g, "")
const whatsappLink = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsappMessage)}`

// Generate: https://wa.me/541137234567?text=Hola%2C%20tengo%20una%20consulta%20sobre%20IFBB%20Argentina
```

### Floating Button with Hover
```typescript
<a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className="fixed bottom-8 right-8 z-40 rounded-full"
>
  {/* Pulse animation */}
  <div className="absolute inset-0 animate-pulse">
    <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#20BA58] rounded-full opacity-20" />
  </div>

  {/* Main button */}
  <div
    className={`relative w-16 h-16 rounded-full bg-gradient-to-r from-[#25D366] to-[#20BA58] shadow-lg flex items-center justify-center transition-all duration-300 ${
      isHovered ? "scale-110 shadow-2xl" : "scale-100"
    }`}
  >
    <MessageCircle className="w-8 h-8 text-white fill-white" />
  </div>

  {/* Tooltip */}
  {isHovered && (
    <div className="absolute bottom-20 right-0 bg-[#25D366] text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm animate-in">
      ¿Necesitás ayuda? Contactanos
    </div>
  )}
</a>
```

---

## Page Integration Example

### Updated page.tsx Structure
```typescript
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InstagramFeed } from "@/components/instagram-feed"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { WhatsAppContact } from "@/components/whatsapp-contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero, Events, Features, CTA sections */}
      
      <InstagramFeed />
      
      {/* NEW SECTIONS */}
      <TestimonialsSection />
      <FAQSection />
      <WhatsAppContact />
      
      <Footer />
    </div>
  )
}
```

---

## Styling Patterns

### Glass Card Effect
```typescript
// From globals.css
.glass-card {
  background: hsl(var(--color-card) / 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid hsl(var(--color-primary) / 0.1);
}

// Usage
<div className="glass-card rounded-3xl p-8 md:p-12">
  {content}
</div>
```

### Gold Gradient Text
```typescript
.text-gradient-gold {
  background: linear-gradient(to bottom right, #B78B1E, #FBBF24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// Usage
<h2 className="text-gradient-gold">Testimonios</h2>
```

### Responsive Layout
```typescript
// Testimonials - stacks on mobile, side-by-side on md+
<div className="flex flex-col md:flex-row gap-8 items-center">
  <div className="w-full md:w-1/3">{/* Image */}</div>
  <div className="w-full md:w-2/3">{/* Text */}</div>
</div>

// FAQ - buttons stack on mobile, row on sm+
<div className="flex flex-col sm:flex-row gap-4">
  <a href="...">Contactar</a>
  <a href="...">Email</a>
</div>
```

---

## Animation Examples

### Carousel Dots Animation
```typescript
{testimonials.map((_, index) => (
  <button
    key={index}
    onClick={() => goToSlide(index)}
    className={`rounded-full transition-all duration-300 ${
      index === currentIndex
        ? "bg-[#B78B1E] w-3 h-3"
        : "bg-[#B78B1E]/30 hover:bg-[#B78B1E]/50 w-2 h-2"
    }`}
  />
))}
```

### FAQ Expand Animation
```typescript
{openItems.includes(faq.id) && (
  <div className="px-6 pb-4 border-t border-[#B78B1E]/20 animate-in fade-in slide-in-from-top-2 duration-300">
    <p>{faq.answer}</p>
  </div>
)}
```

### WhatsApp Button Hover
```typescript
className={`transition-all duration-300 transform ${
  isHovered ? "scale-110 shadow-2xl" : "scale-100"
} hover:shadow-xl`}
```

---

## Accessibility Features

### ARIA Labels
```typescript
<button aria-label="Previous testimonial">
  <ChevronLeft />
</button>

<button aria-label={`Go to testimonial ${index + 1}`}>
  {/* Dot */}
</button>

<a aria-label="Contact via WhatsApp">
  {/* WhatsApp Button */}
</a>
```

### Focus States
```typescript
className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
```

---

## Adding More Content

### Add New Testimonial
```typescript
// In testimonials-section.tsx, add to testimonials array:
{
  id: 5,
  name: "New Athlete",
  achievement: "Achievement Here",
  quote: "Your testimonial quote here...",
  image: "/athletes/new-athlete.jpg",
  category: "Your Category",
  year: 2024,
}
```

### Add New FAQ
```typescript
// In faq-section.tsx, add to faqs array:
{
  id: 11,
  category: "New Category",
  question: "Your question here?",
  answer: "Your detailed answer here...",
}
```

### Change WhatsApp Number
```typescript
// In whatsapp-contact.tsx:
const whatsappNumber = "+54 9 11 1234-5678"  // Update this
```

---

## Testing Examples

### Testing Testimonial Navigation
```javascript
// Expected behavior:
1. Click next button -> slides to next testimonial
2. Click previous button -> slides to previous testimonial
3. Click on dot indicator -> jumps to that testimonial
4. Navigation wraps around (last -> first, first -> last)
```

### Testing FAQ Accordion
```javascript
// Expected behavior:
1. Click question -> answer expands with animation
2. Icon rotates 180 degrees
3. Click again -> answer collapses with animation
4. Multiple items can be open simultaneously
```

### Testing WhatsApp Button
```javascript
// Expected behavior:
1. Hover -> button scales up + tooltip appears
2. Click -> opens WhatsApp with pre-filled message
3. Mobile -> button positioned higher to avoid navbar
4. Animation -> pulse effect visible at all times
```

