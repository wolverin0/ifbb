# Quick Start Guide - Sponsorship & Store Features

## Accessing the New Features

### For Administrators
1. Go to Admin Panel (`/admin`)
2. Click "Patrocinadores" in the sidebar
3. View all sponsors and their ROI metrics
4. Click on any sponsor to see detailed analytics

### For Customers
1. Click "Tienda" in the main navigation
2. Browse products by category
3. Add items to cart
4. Click cart icon to proceed to checkout

---

## File Locations

### Key Pages
```
/app/admin/patrocinadores/page.tsx          - Sponsors list
/app/admin/patrocinadores/[id]/page.tsx     - Sponsor details
/app/tienda/page.tsx                        - Store main page
/app/tienda/carrito/page.tsx                - Shopping cart
```

### Components
```
/components/add-sponsor-modal.tsx           - Sponsor form
/components/product-card.tsx                - Product display
/components/mini-cart.tsx                   - Cart dropdown
/components/checkout-modal.tsx              - Checkout form
/components/navigation.tsx                  - Main navigation
/components/admin-sidebar.tsx               - Admin menu
```

---

## Mock Data Available

### 6 Sponsors (Already loaded)
- Megathlon (Gold) - 8.5/10 ROI
- Star Nutrition (Gold) - 8.3/10 ROI
- GFitness (Silver) - 7.2/10 ROI
- BSN (Silver) - 7.0/10 ROI
- MuscleTech (Bronze) - 5.8/10 ROI
- EnaSport (Bronze) - 4.2/10 ROI

### 12 Products (Available)
- 2 Apparel items
- 2 Competition suits
- 1 Posing oil
- 4 Accessories
- 3 Printed items

---

## Customization Guide

### Change Sponsor Data
Edit the `mockSponsors` array in `/app/admin/patrocinadores/page.tsx`

### Change Product List
Edit the `products` array in `/app/tienda/page.tsx`

### Update Brand Colors
- Gold: Change `#B78B1E` in component files
- Tier colors: Update `tierColors` object in sponsorship dashboard

### Modify Categories
Edit the `categories` array in `/app/tienda/page.tsx`

---

## Feature Checklist

### Sponsorship Dashboard
- [x] View all sponsors
- [x] Add new sponsors
- [x] Delete sponsors
- [x] View detailed ROI metrics
- [x] Track impressions and clicks
- [x] Compare tier benefits
- [x] Manage renewals
- [ ] *TODO: PDF report generation*
- [ ] *TODO: Database integration*

### Merchandise Store
- [x] Product grid display
- [x] Category filtering
- [x] Size/color selection
- [x] Add to cart functionality
- [x] View cart
- [x] Checkout form
- [x] Order confirmation
- [ ] *TODO: Payment gateway integration*
- [ ] *TODO: Inventory management*
- [ ] *TODO: Real product images*

---

## Next Steps for Production

### 1. Database Integration
- Connect `mockSponsors` to database
- Connect `products` array to database
- Add authentication for admin access

### 2. Payment Integration
- Implement MercadoPago API
- Add order processing
- Setup email notifications

### 3. Image Handling
- Replace placeholder product images
- Add sponsor logo upload functionality
- Implement image optimization

### 4. Additional Features
- Add product reviews
- Implement wishlist
- Create discount/promo system
- Add email notifications
- Setup analytics tracking

---

## Important URLs

### Admin URLs
- Dashboard: `/admin`
- Sponsors: `/admin/patrocinadores`
- Sponsor Details: `/admin/patrocinadores/[id]`

### Public URLs
- Store: `/tienda`
- Cart: `/tienda/carrito`

---

## Component Props

### AddSponsorModal
```typescript
isOpen: boolean
onClose: () => void
onAdd: (sponsor: any) => void
```

### ProductCard
```typescript
product: Product
onAddToCart: (product, quantity, size, color) => void
```

### CheckoutModal
```typescript
isOpen: boolean
onClose: () => void
total: number
onSuccess: (orderNumber: string) => void
```

---

## Styling Classes Used

### Cards
- `glass-card` - Frosted glass effect
- `bg-card` - Card background
- `border-border` - Border color

### Colors
- Gold highlight: `#B78B1E`
- Text foreground: `text-foreground`
- Muted text: `text-muted-foreground`
- Status green: `text-green-600`

### Responsive
- `hidden lg:flex` - Hide on mobile
- `lg:col-span-2` - Column sizing
- `md:grid-cols-2` - Responsive grid
- `sm:w-auto` - Width responsive

---

## Troubleshooting

### Sponsors not showing?
- Check `mockSponsors` array is populated
- Verify component imports
- Check browser console for errors

### Store not displaying?
- Verify `products` array has items
- Check category filtering logic
- Ensure Navigation component is imported

### Cart not working?
- Verify localStorage is available
- Check button onClick handlers
- Verify cart page route exists

---

## Support

For questions or issues:
1. Check component exports
2. Verify imports in pages
3. Check console for errors
4. Review mock data structure

