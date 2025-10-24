# Mobile Responsiveness Guide

This document outlines the systematic approach to mobile responsiveness in this project.

## Problem
We were reactively fixing mobile layout issues one-by-one, which was inefficient and led to missed problems. This guide establishes reusable patterns to prevent horizontal scroll and layout issues systematically.

## Global Responsive Utilities

Located in `app/globals.css`, these utilities should be used throughout the app:

### 1. `.btn-group-responsive`
**Use for**: Button groups that should stack on mobile
```tsx
// Before (causes horizontal scroll on mobile)
<div className="flex gap-4">
  <Button className="flex-1">Anterior</Button>
  <Button className="flex-1">Guardar</Button>
  <Button className="flex-1">Siguiente</Button>
</div>

// After (stacks on mobile, horizontal on desktop)
<div className="btn-group-responsive">
  <Button className="sm:flex-1">Anterior</Button>
  <Button className="sm:flex-1">Guardar</Button>
  <Button className="sm:flex-1">Siguiente</Button>
</div>
```

### 2. `.mobile-stack`
**Use for**: Flex containers that should stack vertically on mobile
```tsx
<div className="mobile-stack gap-4">
  <div>Content 1</div>
  <div>Content 2</div>
</div>
```

### 3. `.responsive-container`
**Use for**: Page-level containers that need proper padding and overflow prevention
```tsx
<div className="responsive-container">
  {/* Your content */}
</div>
```

### 4. `.responsive-grid`
**Use for**: Grids that should adapt from 1 column (mobile) to 2 (tablet) to 3 (desktop)
```tsx
<div className="responsive-grid">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

## Common Patterns

### Tables
ALL tables with multiple columns MUST be wrapped in an overflow container:

```tsx
// ❌ BAD - Will cause horizontal scroll on mobile
<CardContent>
  <Table>
    {/* table content */}
  </Table>
</CardContent>

// ✅ GOOD - Allows horizontal scroll within the card
<CardContent>
  <div className="overflow-x-auto -mx-6 sm:mx-0">
    <div className="inline-block min-w-full align-middle px-6 sm:px-0">
      <Table>
        {/* table content */}
      </Table>
    </div>
  </div>
</CardContent>
```

### Grid Layouts
All grids MUST start with 1 column on mobile:

```tsx
// ❌ BAD - Fixed 3 columns on all screens
<div className="grid grid-cols-3 gap-4">

// ✅ GOOD - 1 column on mobile, 3 on larger screens
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

// ✅ BETTER - Use the utility class
<div className="responsive-grid">
```

### Headers and Titles
Account for mobile hamburger menu overlap:

```tsx
// Add left padding on mobile only
<header className="mb-8 pl-16 lg:pl-0">
  <h1 className="text-2xl sm:text-4xl font-bold">Title</h1>
  <p className="text-sm sm:text-base text-muted-foreground">Subtitle</p>
</header>
```

### Button Groups
Use the `.btn-group-responsive` class and `sm:flex-1` on buttons:

```tsx
<div className="btn-group-responsive">
  <Button className="sm:flex-1" variant="outline">Cancel</Button>
  <Button className="sm:flex-1">Confirm</Button>
</div>
```

## Audit Script

Run the mobile responsiveness audit to find issues:

```bash
./audit-mobile-responsiveness.sh
```

This will check for:
1. Tables without overflow wrappers
2. Button groups that might overflow
3. Grid layouts without mobile responsiveness
4. Fixed-width elements
5. Flex containers without responsive direction

## Testing Checklist

Before considering a page "mobile-ready":

- [ ] Test at 375px width (iPhone SE)
- [ ] Test at 390px width (iPhone 12/13/14)
- [ ] Test at 360px width (Android)
- [ ] No horizontal scrolling on any page
- [ ] All buttons are accessible and tappable
- [ ] Text is readable (not too small)
- [ ] Tables scroll horizontally within their cards
- [ ] Hamburger menu doesn't cover page titles

## Fixed Files

Pages that have been systematically fixed:
- ✅ `app/admin/eventos/page.tsx` - Table overflow + header padding
- ✅ `app/admin/atletas/page.tsx` - Header padding + responsive text
- ✅ `app/admin/pagos/page.tsx` - Header padding + responsive text
- ✅ `app/admin/reportes/page.tsx` - Header padding + responsive text
- ✅ `app/admin/canciones/page.tsx` - Header padding + responsive grid (stats cards)
- ✅ `app/admin/patrocinadores/page.tsx` - Header padding + responsive text
- ✅ `app/eventos/[id]/inscripcion/page.tsx` - Button groups responsive
- ✅ `app/resultados/page.tsx` - Table overflow wrapper

## Future Development

When creating new pages or components:

1. **Start mobile-first** - Design for 375px width first
2. **Use utility classes** - Don't write custom responsive code if a utility exists
3. **Test immediately** - Don't wait until the end to test mobile
4. **Run the audit** - Use `./audit-mobile-responsiveness.sh` before committing
5. **Update this document** - Add new patterns as you discover them
