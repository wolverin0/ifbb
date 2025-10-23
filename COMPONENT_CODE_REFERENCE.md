# Instagram Component - Code Reference

## File: components/instagram-feed.tsx

Complete component breakdown with key code sections.

---

## 1. Imports Section

```typescript
'use client'

import { 
  Instagram, Heart, MessageCircle, Share2, 
  Users, Zap, Facebook, Youtube, MessageSquare 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
```

**What's included:**
- 'use client': Makes this a client component
- Icons from lucide-react for UI elements
- Button component from UI library
- Link component from Next.js

---

## 2. Interface Definition

```typescript
interface InstagramPost {
  id: string
  image: string
  likes: number
  comments: number
}
```

**Structure:**
- `id`: Unique post identifier
- `image`: Path to post image
- `likes`: Number of likes
- `comments`: Number of comments

---

## 3. Mock Data Arrays

### Instagram Posts Array
```typescript
const instagramPosts: InstagramPost[] = [
  { 
    id: '1', 
    image: '/instagram-post-1-bodybuilding-stage.jpg', 
    likes: 1240, 
    comments: 87 
  },
  { 
    id: '2', 
    image: '/instagram-post-2-fitness-competition.jpg', 
    likes: 2105, 
    comments: 156 
  },
  // ... 4 more posts
]
```

**Data points:**
- 6 total posts
- Likes: 1.2K to 3.4K
- Comments: 87 to 245

### Engagement Statistics Array
```typescript
const engagementStats = [
  { label: 'Seguidores', value: '15.3K', icon: Users },
  { label: 'Posts', value: '487', icon: Zap },
  { label: 'Engagement', value: '8.2%', icon: Heart },
]
```

**Customization:**
- Change `value` for different stats
- Swap `icon` component for different icon
- Update `label` for different language

### Social Links Array
```typescript
const socialLinks = [
  { 
    name: 'Instagram', 
    icon: Instagram, 
    url: 'https://www.instagram.com/ifbbacademyargentina/',
    color: 'hover:text-pink-500' 
  },
  { 
    name: 'Facebook', 
    icon: Facebook, 
    url: 'https://www.facebook.com/ifbbacademyargentina/',
    color: 'hover:text-blue-600' 
  },
  { 
    name: 'YouTube', 
    icon: Youtube, 
    url: 'https://www.youtube.com/@ifbbacademyargentina',
    color: 'hover:text-red-600' 
  },
  { 
    name: 'WhatsApp', 
    icon: MessageSquare, 
    url: 'https://wa.me/5491234567890',
    color: 'hover:text-green-500' 
  },
]
```

**Customization:**
- Change `url` to update link
- Change `color` for different hover color
- Add new platform object for more links

---

## 4. Component Return Structure

```typescript
export function InstagramFeed() {
  // Data arrays here...
  
  return (
    <>
      {/* Section 1: Instagram Feed */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#111827]/30">
        {/* Content here */}
      </section>

      {/* Section 2: Social Media Links */}
      <section className="py-16 bg-gradient-to-r from-[#0B0B0F]/90 to-[#111827]/90 border-t border-[#B78B1E]/10">
        {/* Content here */}
      </section>
    </>
  )
}
```

---

## 5. Instagram Feed Section Header

```typescript
<div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
  <div className="flex items-center gap-4">
    {/* Instagram Icon Badge */}
    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-pink-500/50">
      <Instagram className="w-7 h-7 text-white" />
    </div>
    
    {/* Heading and Handle */}
    <div>
      <h2 className="text-4xl font-bold text-foreground">
        Síguenos en Instagram
      </h2>
      <p className="text-lg text-[#B78B1E] font-semibold mt-1">
        @ifbbacademyargentina
      </p>
    </div>
  </div>
  
  {/* CTA Button */}
  <Button
    size="lg"
    className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold shadow-lg hover:shadow-pink-500/50"
    asChild
  >
    <Link 
      href="https://www.instagram.com/ifbbacademyargentina/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Ver Más en Instagram
      <Instagram className="ml-2 w-5 h-5" />
    </Link>
  </Button>
</div>
```

**Key Features:**
- Responsive: flex-col on mobile, flex-row on tablet+
- Icon badge with gradient and shadow
- Handle in gold color
- Button with hover shadow effect

---

## 6. Engagement Statistics Cards

```typescript
<div className="grid grid-cols-3 gap-4 mb-12">
  {engagementStats.map((stat) => {
    const Icon = stat.icon
    return (
      <div
        key={stat.label}
        className="glass-card p-6 rounded-2xl text-center hover-lift group"
      >
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:from-pink-500/30 group-hover:to-red-500/30 transition-colors">
            <Icon className="w-6 h-6 text-pink-500" />
          </div>
        </div>
        <div className="text-2xl font-bold text-gradient-gold mb-1">
          {stat.value}
        </div>
        <div className="text-sm text-muted-foreground">
          {stat.label}
        </div>
      </div>
    )
  })}
</div>
```

**Key Features:**
- Grid: 3 columns on desktop
- glass-card styling with hover-lift
- Icon background with gradient
- Gold gradient text for values
- Dynamic icon rendering

---

## 7. Instagram Posts Grid

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  {instagramPosts.map((post) => (
    <div
      key={post.id}
      className="group relative overflow-hidden rounded-2xl glass-card hover-lift"
    >
      {/* Post Image Container */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
        <img
          src={post.image}
          alt={`Instagram post ${post.id}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/400x400?text=Post+${post.id}`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-[#0B0B0F]/20 to-transparent" />

        {/* Hover Engagement Overlay */}
        <div className="absolute inset-0 bg-[#0B0B0F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
          <div className="text-center">
            <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <span className="text-white font-semibold block">
              {(post.likes / 1000).toFixed(1)}K
            </span>
            <span className="text-sm text-gray-300">Me gusta</span>
          </div>
          <div className="text-center">
            <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <span className="text-white font-semibold block">
              {post.comments}
            </span>
            <span className="text-sm text-gray-300">Comentarios</span>
          </div>
        </div>
      </div>

      {/* Post Info Footer */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-semibold text-foreground">
              {(post.likes / 1000).toFixed(1)}K
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-foreground">
              {post.comments}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Share2 className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold text-foreground">
              Share
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
```

**Key Features:**
- Responsive grid: 1/2/3 columns
- Hover zoom effect (scale-110)
- Image error fallback to placeholder.com
- Gradient overlay on image
- Engagement overlay on hover
- Post info with like/comment/share counts

---

## 8. Instagram CTA Button

```typescript
<div className="text-center">
  <p className="text-lg text-muted-foreground mb-6">
    Más contenido exclusivo de IFBB Academy Argentina
  </p>
  <Button
    size="lg"
    className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white font-semibold text-lg px-10 h-14 shadow-lg hover:shadow-pink-500/50"
    asChild
  >
    <Link 
      href="https://www.instagram.com/ifbbacademyargentina/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Seguir @ifbbacademyargentina
      <Instagram className="ml-2 w-5 h-5" />
    </Link>
  </Button>
</div>
```

**Key Features:**
- Centered layout
- Gradient button (pink→red→yellow)
- Hover shadow enhancement
- Opens in new tab
- Instagram icon included

---

## 9. Social Media Links Section

```typescript
<section className="py-16 bg-gradient-to-r from-[#0B0B0F]/90 to-[#111827]/90 border-t border-[#B78B1E]/10">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Section Heading */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Conectá con nosotros
        </h3>
        <p className="text-muted-foreground">
          Síguenos en todas las plataformas
        </p>
      </div>

      {/* Social Icons Grid */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              title={social.name}
            >
              {/* Gold Glow Background */}
              <div className="absolute inset-0 rounded-full bg-[#B78B1E]/0 group-hover:bg-[#B78B1E]/20 transition-all duration-300 blur-xl group-hover:blur-2xl" />

              {/* Icon Container */}
              <div className="relative w-14 h-14 rounded-full bg-[#111827]/80 border border-[#B78B1E]/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#B78B1E] group-hover:shadow-lg group-hover:shadow-[#B78B1E]/50">
                <Icon className={`w-6 h-6 text-[#B78B1E] transition-colors duration-300 ${social.color}`} />
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-[#B78B1E] text-[#0B0B0F] text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {social.name}
              </div>
            </Link>
          )
        })}
      </div>

      {/* Website Link */}
      <div className="text-center pt-4 border-t border-[#B78B1E]/10 w-full">
        <p className="text-muted-foreground mb-4">
          O visita nuestro sitio web
        </p>
        <Button
          variant="outline"
          className="border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F] bg-transparent px-8 h-12 font-semibold"
          asChild
        >
          <Link 
            href="https://ifbbacademyargentina.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            ifbbacademyargentina.com
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>
```

**Key Features:**
- Dark gradient background
- Gold border top accent
- Social icons with glow effect
- Tooltip on hover
- Dynamic icon mapping
- Website link button
- Fully responsive layout

---

## Component Export

```typescript
export function InstagramFeed() {
  // All data and JSX here...
}
```

**Usage in page.tsx:**
```typescript
import { InstagramFeed } from "@/components/instagram-feed"

// In JSX:
<InstagramFeed />
```

---

## Key Styling Patterns

### Glass Card Effect
```typescript
className="glass-card p-6 rounded-2xl"
```

### Hover Lift
```typescript
className="hover-lift"
// Transforms to translateY(-4px) on hover
```

### Text Gradient
```typescript
className="text-gradient-gold"
// Gold gradient text effect
```

### Responsive Grid
```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// 1 col mobile, 2 col tablet, 3 col desktop
```

### Hover Effects
```typescript
className="group-hover:opacity-100 transition-opacity duration-300"
className="group-hover:scale-110 transition-transform duration-300"
className="group-hover:shadow-lg group-hover:shadow-[#B78B1E]/50"
```

---

## Data Formatting

### Likes/Comments Formatting
```typescript
// Convert to K format
{(post.likes / 1000).toFixed(1)}K  // e.g., "1.2K"
{post.comments}                     // e.g., "87"
```

---

## Component Dependencies

```
lucide-react
├── Instagram (icon)
├── Heart (icon)
├── MessageCircle (icon)
├── Share2 (icon)
├── Users (icon)
├── Zap (icon)
├── Facebook (icon)
├── Youtube (icon)
└── MessageSquare (icon)

@/components/ui/button
└── Button component

next/link
└── Link component for routing
```

---

## Complete Component Size

- **Total Lines:** 208
- **CSS Classes Used:** 50+
- **Icons Used:** 9
- **Sections:** 2 main (Instagram Feed + Social Bar)
- **Sub-sections:** 5 (Header, Stats, Posts, CTA, Social)

---

**This reference covers all major code sections of the instagram-feed.tsx component.**

For more details, see:
- IMPLEMENTATION_DETAILS.md (code structure)
- VISUAL_REFERENCE.md (design reference)
- QUICK_REFERENCE.md (quick start)

