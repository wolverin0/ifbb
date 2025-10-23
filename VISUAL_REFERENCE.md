# Instagram Integration - Visual Reference Guide

## Component Layout Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                   INSTAGRAM FEED SECTION                     │
│                 py-20 bg-gradient section                    │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────┐                    ┌──────────────┐   │
│  │ Instagram Icon   │  Síguenos en       │ Ver Más en   │   │
│  │  (Gradient)      │  Instagram         │  Instagram   │   │
│  │                  │  @ifbbacademyarg   │   (Button)   │   │
│  └──────────────────┘                    └──────────────┘   │
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ 15.3K        │  │    487       │  │    8.2%      │      │
│  │ Seguidores   │  │    Posts     │  │  Engagement  │      │
│  │ (Stat Cards) │  │  (Stat Card) │  │  (Stat Card) │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │  Post 1    │  │  Post 2    │  │  Post 3    │            │
│  │  (Image)   │  │  (Image)   │  │  (Image)   │            │
│  │ 1.2K / 87  │  │ 2.1K / 156 │  │ 1.8K / 134 │            │
│  └────────────┘  └────────────┘  └────────────┘            │
│                                                               │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │  Post 4    │  │  Post 5    │  │  Post 6    │            │
│  │  (Image)   │  │  (Image)   │  │  (Image)   │            │
│  │ 3.4K / 245 │  │ 2.7K / 201 │  │ 1.6K / 118 │            │
│  └────────────┘  └────────────┘  └────────────┘            │
│                                                               │
│                  ┌──────────────────────┐                    │
│                  │ Seguir en Instagram  │                    │
│                  │      (Button)        │                    │
│                  └──────────────────────┘                    │
│                                                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│               SOCIAL MEDIA LINKS BAR SECTION                 │
│         Dark gradient bg, border-top: gold accent            │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│                    Conectá con nosotros                       │
│              Síguenos en todas las plataformas               │
│                                                               │
│     ┌────┐  ┌────┐  ┌────┐  ┌────┐                          │
│     │ IG │  │ FB │  │ YT │  │ WA │                          │
│     │(🌐)│  │(f) │  │(▶) │  │(💬)│                          │
│     └────┘  └────┘  └────┘  └────┘                          │
│                                                               │
│                  O visita nuestro sitio web                   │
│                  ┌──────────────────────┐                    │
│                  │ifbbacademyargentina │                    │
│                  │     .com (Button)    │                    │
│                  └──────────────────────┘                    │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Responsive Behavior

### Desktop (1024px+)
```
Header: [Icon + Text] -------- [Button]
Stats:  [Stat1] [Stat2] [Stat3]
Posts:  [P1] [P2] [P3]
        [P4] [P5] [P6]
Social: [IG] [FB] [YT] [WA]
```

### Tablet (768px)
```
Header: [Icon + Text] -------- [Button]
Stats:  [Stat1] [Stat2] [Stat3]
Posts:  [P1] [P2]
        [P3] [P4]
        [P5] [P6]
Social: [IG] [FB] [YT] [WA]
```

### Mobile (< 768px)
```
Header: [Icon + Text]
        [Button]
Stats:  [Stat1] [Stat2] [Stat3]
Posts:  [P1]
        [P2]
        [P3]
        [P4]
        [P5]
        [P6]
Social: [IG] [FB]
        [YT] [WA]
```

---

## Color Palette

### Primary Colors
```
Gold (Brand):        #B78B1E
Dark Background:     #0B0B0F
Slate Background:    #111827
```

### Instagram Gradient
```
Pink:                #EC4899 (Pink-500)
Red:                 #EF4444 (Red-500)
Yellow:              #FBBF24 (Yellow-400)
```

### Social Platform Colors
```
Instagram Hover:     Pink (#EC4899)
Facebook Hover:      Blue (#1E3A8A)
YouTube Hover:       Red (#DC2626)
WhatsApp Hover:      Green (#15803D)
```

### Text Colors
```
Foreground (Light):  Light gray/white
Muted:               Medium gray
Brand Gold:          #B78B1E
```

---

## Styling Reference

### Glass Card
```css
background: hsl(var(--color-card) / 0.6);
backdrop-filter: blur(12px);
border: 1px solid hsl(var(--color-primary) / 0.1);
```

### Hover Lift
```css
transition: transform 200ms ease-out;
/* On hover: */
transform: translateY(-4px);
```

### Text Gradient Gold
```css
background: linear-gradient(to bottom right, #B78B1E, #FBBF24);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Instagram Gradient Button
```css
background: linear-gradient(to right, #EC4899, #EF4444, #FBBF24);
/* Hover: */
background: linear-gradient(to right, #DB2777, #DC2626, #EAAD00);
box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
```

### Gold Glow Effect
```css
/* Background glow */
background: #B78B1E / 20%;

/* On hover */
box-shadow: 0 0 30px rgba(183, 139, 30, 0.5);
border: 1px solid #B78B1E;
```

---

## Icon Usage

### From lucide-react
```typescript
Instagram          - Social platform icon
Heart             - Likes indicator
MessageCircle     - Comments indicator
Share2            - Share button
Users             - Followers stat
Zap               - Posts stat
Facebook          - Facebook link
Youtube           - YouTube link
MessageSquare     - WhatsApp link
```

### Sizes
```
Small icons (utility):     w-4 h-4 (16px)
Medium icons (content):    w-5 h-5 (20px)
Large icons (header):      w-6 h-6 / w-7 h-7 (24px/28px)
Badge icons:               w-6 h-6 / w-12 h-12 (24px/48px)
```

### Colors
```
Gold accent:       #B78B1E
Pink (Instagram):  #EC4899
Blue (Facebook):   #1E3A8A
Red (YouTube):     #DC2626
White (on gradient): white
```

---

## Hover Effects Demonstration

### Stat Card Hover
```
BEFORE:                      AFTER (on hover):
┌──────────────┐            ┌──────────────┐
│ Icon(pink)   │            │ Icon(brighter)
│ 15.3K        │  ───┐      │ 15.3K        │
│ Seguidores   │  h→ │      │ Seguidores   │
└──────────────┘    │      └──────────────┘
                    │         Transform: ↑ -4px
                    │         Icon bg: darker pink
                    │         Duration: 200ms
```

### Post Image Hover
```
BEFORE:              AFTER (on hover):
┌──────┐            ┌──────────────┐
│Image │  ───┐      │ Image(scale) │
│(1:1) │  h→ │      │ +110%        │
│      │    │      │   + overlay  │
└──────┘    │      │   [1.2K]     │
             │      │   [87]       │
             │      └──────────────┘
             │      Opacity: 0→100%
             │      Duration: 300ms
```

### Social Icon Hover
```
BEFORE:               AFTER (on hover):
 ┌─────┐             ┏━━━━━━━┓
 │  IG │   ───┐      ┃   IG  ┃
 │  🌐 │   h→ │      ┃   🌐  ┃ ← Gold glow
 │     │      │      ┃       ┃   Gold shadow
 └─────┘      │      ┗━━━━━━━┛   Tooltip shows
              │        ↓         "Instagram"
              │     [Instagram]
              │     Duration: 300ms
```

---

## Spacing & Layout

### Padding/Margins
```
Section vertical:    py-20 (80px)
Section horizontal:  px-4 (16px)
Container padding:   mx-auto (centered)
Card padding:        p-6 (24px)
Gap between items:   gap-4, gap-6
```

### Heights
```
Stat cards:          p-6 rounded-2xl
Post images:         h-80 (320px)
Social icons:        w-14 h-14 (56px)
Buttons:             h-14, h-12 (56px, 48px)
Header:              gap-4, gap-6
```

### Border Radius
```
Rounded cards:       rounded-2xl (16px)
Icon containers:     rounded-full (50%)
Buttons:             Built-in or rounded-lg
Thumbnails:          rounded-2xl (16px)
```

---

## Text Hierarchy

### Headings
```
H2 (Main):          text-4xl font-bold (Instagram section header)
H3 (Sub):           text-2xl font-bold (Social section header)
Body:               text-lg (Descriptions)
Small:              text-sm (Labels, stats)
```

### Font Weights
```
Bold:               font-bold (headings)
Semibold:           font-semibold (button text, handles)
Regular:            default (body text)
```

### Text Colors
```
Primary text:       text-foreground
Secondary:          text-muted-foreground
Accent:             text-[#B78B1E] (gold)
White on gradient:  text-white (buttons)
```

---

## Animation Timing

### Transitions
```
Standard:           duration-300ms (most effects)
Buttons:            duration-200ms (fast)
Lifts:              ease-out
Opacity:            linear
Transforms:         ease-out
```

### Effects
```
Hover:              On mouse enter
Group hover:        Parent hover affects children
Focus:              Keyboard navigation support
Active:             Click/press states
```

---

## Accessibility

### Color Contrast
- Gold on dark background: WCAG AAA compliant
- White on gradient: High contrast
- Text on cards: Sufficient contrast
- Icons: Color + shape differentiation

### Interactive Elements
- Buttons: Proper focus states
- Links: Understandable when focused
- Icons: Labeled with titles or tooltips
- Forms: Proper labeling (if extended)

### Responsive Text
- Readable font sizes on all screens
- Line length appropriate
- Padding maintains readability

---

## Links & URLs

All links open in new tabs with proper security:

```
target="_blank"
rel="noopener noreferrer"
```

### Link Destinations
```
Instagram:           https://www.instagram.com/ifbbacademyargentina/
Facebook:            https://www.facebook.com/ifbbacademyargentina/
YouTube:             https://www.youtube.com/@ifbbacademyargentina
WhatsApp:            https://wa.me/5491234567890
Website:             https://ifbbacademyargentina.com/
```

---

## File Structure for Reference

```
components/
├── instagram-feed.tsx
│   ├── Imports
│   ├── Interface definitions
│   ├── Component function
│   ├── Data arrays
│   ├── Section 1: Instagram Feed
│   ├── Section 2: Engagement Stats
│   ├── Section 3: Post Grid
│   ├── Section 4: Instagram CTA
│   ├── Section 5: Social Media Bar
│   └── Returns JSX
│
app/
└── page.tsx
    ├── Updated imports (line 4)
    └── Component usage (line 235)
```

---

## Quick Customization Guide

### To Change Colors:
1. Update Instagram gradient: `from-pink-500 via-red-500 to-yellow-500`
2. Update gold color: `#B78B1E` or `[#B78B1E]`
3. Update stat icons: Change the icon or color

### To Add More Posts:
1. Add object to `instagramPosts` array
2. Grid will automatically adjust (3 column on desktop)

### To Change Links:
1. Update URL in `socialLinks` array
2. Or update individual Button/Link `href` props

### To Modify Stats:
1. Update values in `engagementStats` array
2. Change icons by substituting lucide-react components

---

**Last Updated:** October 23, 2025
**Component Version:** 1.0
