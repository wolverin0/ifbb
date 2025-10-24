#!/bin/bash

echo "========================================="
echo "MOBILE RESPONSIVENESS AUDIT"
echo "========================================="
echo ""

echo "1. Tables without overflow-x-auto wrapper:"
echo "-------------------------------------------"
grep -rn "Table>" app/ components/ --include="*.tsx" --include="*.jsx" | grep -v "overflow-x-auto" | head -20
echo ""

echo "2. Button groups with flex that might overflow:"
echo "------------------------------------------------"
grep -rn "flex gap" app/ components/ --include="*.tsx" --include="*.jsx" | grep -i button | head -20
echo ""

echo "3. Grid layouts with fixed columns:"
echo "------------------------------------"
grep -rn "grid-cols-[2-9]" app/ components/ --include="*.tsx" --include="*.jsx" | grep -v "sm:" | grep -v "md:" | head -20
echo ""

echo "4. Fixed width elements that might overflow:"
echo "---------------------------------------------"
grep -rn "w-\[.*px\]" app/ components/ --include="*.tsx" --include="*.jsx" | head -20
echo ""

echo "5. Flex containers without wrap or responsive direction:"
echo "---------------------------------------------------------"
grep -rn "className.*flex" app/ components/ --include="*.tsx" --include="*.jsx" | grep -v "flex-col" | grep -v "flex-wrap" | grep -v "sm:" | grep -v "md:" | head -20
