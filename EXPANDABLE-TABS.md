# Expandable Tabs Component Added

## ✅ Component Created
- **File:** `components/ui/expandable-tabs.tsx`
- Features:
  - Animated tabs with expand/collapse
  - Separator support between sections
  - Customizable active color
  - Click outside to close
  - Framer Motion animations

## 📦 Required Dependencies

You need to install `usehooks-ts`:

```bash
npm install usehooks-ts
```

**Already installed:**
- ✅ framer-motion (installed)
- ✅ lucide-react (installed)

## 💡 Usage Example

```tsx
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Home, Settings, User, Bell } from "lucide-react";

function MyComponent() {
  const tabs = [
    { title: "Dashboard", icon: Home },
    { type: "separator" },
    { title: "Settings", icon: Settings },
    { title: "Profile", icon: User },
  ];

  return (
    <ExpandableTabs
      tabs={tabs}
      activeColor="text-purple-500"
      onChange={(index) => console.log('Selected:', index)}
    />
  );
}
```

## 🎨 Props

| Prop | Type | Description |
|------|------|-------------|
| `tabs` | `TabItem[]` | Array of tab objects with title, icon, and optional type |
| `className` | `string` | Additional CSS classes |
| `activeColor` | `string` | Text color for active tab (default: "text-primary") |
| `onChange` | `(index \| null) => void` | Callback when tab selection changes |

## 🔗 Tabs Structure

```tsx
// Regular tab
{ title: "Tab Name", icon: IconComponent }

// Separator (visual divider)
{ type: "separator" }
```

## 📍 Integration Suggestions

Use this component for:
- Header navigation
- Section navigation
- Filter tabs
- Category selection
- Any expandable menu system
