# Livestream Integration - Quick Reference Guide

## Quick Links

- **Livestream Page**: `/transmision`
- **Results Page** (Enhanced): `/resultados`
- **Homepage**: `/` (updated feature card)

---

## New Files Location

```
/components/
  ├── youtube-video-player.tsx
  ├── event-info-card.tsx
  ├── livestream-chat.tsx
  ├── next-event-countdown.tsx
  └── related-videos.tsx

/app/
  └── transmision/
      └── page.tsx
```

---

## How to Use Components

### YouTubeVideoPlayer
```tsx
import { YouTubeVideoPlayer } from "@/components/youtube-video-player"

<YouTubeVideoPlayer
  videoId="-qHfriGYCB4"
  title="Event Title"
  showSampleBadge={true}
/>
```

### EventInfoCard
```tsx
import { EventInfoCard } from "@/components/event-info-card"

<EventInfoCard
  eventName="Copa Provincial Córdoba"
  date="22 de Marzo, 2025"
  time="18:30"
  location="Centro de Convenciones"
  city="Córdoba"
  categories={["Men's Physique", "Bikini Fitness"]}
  viewers="235 espectadores"
/>
```

### LivestreamChat
```tsx
import { LivestreamChat } from "@/components/livestream-chat"

<LivestreamChat messages={messageArray} />
// Uses default mock messages if not provided
```

### NextEventCountdown
```tsx
import { NextEventCountdown } from "@/components/next-event-countdown"

<NextEventCountdown
  eventName="Event Name"
  date="15 de Marzo, 2025"
  time="18:00"
  location="Venue, City"
/>
```

### RelatedVideos
```tsx
import { RelatedVideos } from "@/components/related-videos"

<RelatedVideos videos={videoArray} />
// Uses default videos if not provided
```

---

## Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | `#B78B1E` | Primary accents, buttons |
| Purple | `#8B5CF6` | Secondary accents, chat |
| Cyan | `#22D3EE` | Tertiary accents, highlights |
| Orange | `#F97316` | Sample badge, alerts |
| Dark | `#0B0B0F` | Background, dark mode |

---

## Key Features at a Glance

### Video Player
- Responsive 16:9 aspect ratio
- Sample event badge (orange)
- Loading spinner
- Full-screen enabled
- Auto-quality selection
- YouTube player controls

### Event Info Card
- Date, time, location display
- Categories with badges
- Live viewer count
- Share buttons (WhatsApp, Facebook, Twitter)
- Glass-card styling

### Chat Interface
- Mock live chat with sample messages
- User avatars and timestamps
- 235 active users
- Message input (disabled for sample)
- Chat availability notice

### Countdown Timer
- Real-time updates
- Days, Hours, Minutes, Seconds
- Gradient color accents
- "Recordarme" button
- Event details display

### Related Videos
- 3 past livestream thumbnails
- View counts and dates
- Duration badges
- Hover play button
- Responsive grid layout

---

## Navigation Updates

### Desktop & Mobile
```
Before: "Resultados en Vivo" → /resultados
After:  "Transmisión en Vivo" → /transmision
```

---

## Responsive Breakpoints

### Desktop (lg: 1024px+)
- 3-column layout for main content
- Full-featured display

### Tablet (md: 768px+)
- 2-column layout
- Stacked sections

### Mobile (sm: <768px)
- Single column
- Full-width elements
- Optimized touch interactions

---

## Customization Checklist

To customize the livestream implementation:

- [ ] Update YouTube video ID in components
- [ ] Change event names and dates
- [ ] Update location information
- [ ] Modify category list
- [ ] Customize team/user chat messages
- [ ] Adjust color scheme (if desired)
- [ ] Update next event countdown date
- [ ] Add/modify related videos list
- [ ] Test responsive design on devices
- [ ] Verify navigation links work

---

## File Structure Overview

```
app/
├── page.tsx                    [MODIFIED] - Homepage with updated feature card
├── resultados/
│   └── page.tsx               [MODIFIED] - Results page with YouTube integration
├── transmision/               [NEW]
│   └── page.tsx               [NEW] - Livestream page
└── ... (other existing pages)

components/
├── navigation.tsx             [MODIFIED] - Updated navigation links
├── youtube-video-player.tsx   [NEW]
├── event-info-card.tsx        [NEW]
├── livestream-chat.tsx        [NEW]
├── next-event-countdown.tsx   [NEW]
├── related-videos.tsx         [NEW]
└── ... (other existing components)
```

---

## Performance Tips

1. **Load Video Lazily**: Video doesn't load until user scrolls to it
2. **Optimize Images**: Use compressed thumbnails for related videos
3. **Cache Timers**: Countdown updates only when seconds change
4. **Responsive Images**: Use srcset for different screen sizes
5. **Monitor Bundle Size**: Components are lightweight (~3-5KB each)

---

## Common Modifications

### Change Video ID
File: `/components/youtube-video-player.tsx` or `/app/transmision/page.tsx`
```tsx
videoId="-qHfriGYCB4"  // Replace with your video ID
```

### Update Event Date
File: `/components/next-event-countdown.tsx`
```tsx
const targetDate = new Date("2025-03-15T18:00:00").getTime()  // Update this date
```

### Add More Videos
File: `/components/related-videos.tsx`
Add to `defaultVideos` array:
```tsx
{
  id: "4",
  title: "Your Video Title",
  thumbnail: "/your-image.jpg",
  date: "Date",
  views: "View count",
  duration: "Duration",
}
```

### Customize Colors
Global: `/app/globals.css` or `tailwind.config.mjs`
Component Specific: Update color classes in individual component files

---

## Testing Checklist

- [ ] Video loads and plays correctly
- [ ] Sample badge is visible
- [ ] All event info displays properly
- [ ] Chat messages are visible
- [ ] Countdown timer updates
- [ ] Share buttons appear
- [ ] Related videos display
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] Responsive on desktop
- [ ] Navigation links work
- [ ] No console errors
- [ ] Images load correctly
- [ ] Video controls work
- [ ] Fullscreen mode works

---

## Support

For questions or issues:
1. Check component prop types (TypeScript)
2. Verify event data format
3. Test in different browsers
4. Check responsive design
5. Review console for errors
6. Verify YouTube video is public

---

## Version Info

- **Created**: October 23, 2025
- **Framework**: Next.js 16 + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Status**: Production Ready

---

## Next Steps

1. **Deploy**: Push changes to production
2. **Monitor**: Track livestream page performance
3. **Engage**: Announce new livestream feature
4. **Iterate**: Gather user feedback
5. **Enhance**: Plan for real-time chat and WebSocket integration

---

**Quick Start**: Visit `/transmision` to see the new livestream page in action!
