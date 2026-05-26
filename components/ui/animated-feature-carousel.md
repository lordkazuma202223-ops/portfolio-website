# Animated Feature Carousel Component

A beautiful, animated carousel for showcasing projects or features with smooth transitions and interactive navigation.

## Features

- ✨ Smooth animations with Framer Motion
- 🎯 Step-based navigation with progress tracking
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🖱️ Interactive mouse effects on desktop
- ⏱️ Auto-cycling with customizable interval
- 🎨 Customizable image positions and animations

## Usage

```tsx
import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";

const images = {
  alt: "Project screenshots",
  step1img1: "url-to-image-1",
  step1img2: "url-to-image-2",
  step2img1: "url-to-image-3",
  step2img2: "url-to-image-4",
  step3img: "url-to-image-5",
  step4img: "url-to-image-6",
};

const steps = [
  {
    id: "1",
    name: "Step 1",
    title: "Feature Title",
    description: "Description of the feature or project...",
  },
  // ... more steps
];

<FeatureCarousel
  image={images}
  steps={steps}
  interval={6000}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `ImageSet` | Required | Object containing 6 image URLs |
| `steps` | `Step[]` | Default steps | Array of step objects with name, title, description |
| `interval` | `number` | 5000 | Auto-cycle interval in milliseconds |
| `step1img1Class` | `string` | Default | Custom class for first image in step 1 |
| `step1img2Class` | `string` | Default | Custom class for second image in step 1 |
| `step2img1Class` | `string` | Default | Custom class for first image in step 2 |
| `step2img2Class` | `string` | Default | Custom class for second image in step 2 |
| `step3imgClass` | `string` | Default | Custom class for image in step 3 |
| `step4imgClass` | `string` | Default | Custom class for image in step 4 |
| `bgClass` | `string` | - | Optional background class |

## ImageSet Interface

```tsx
interface ImageSet {
  step1img1: string;
  step1img2: string;
  step2img1: string;
  step2img2: string;
  step3img: string;
  step4img: string;
  alt: string;
}
```

## Step Interface

```tsx
interface Step {
  id: string;
  name: string;
  title: string;
  description: string;
}
```

## Customization

### Adjust Image Positions

You can customize the position and size of images for each step using the `*img*Class` props:

```tsx
<FeatureCarousel
  image={images}
  step1img1Class="w-[40%] left-[10%] top-[20%]"
  step1img2Class="w-[50%] left-[50%] top-[30%]"
  // ... etc
/>
```

### Change Animation Speed

Adjust the `interval` prop to control how fast slides auto-cycle:

```tsx
<FeatureCarousel
  image={images}
  interval={8000} // 8 seconds per slide
/>
```

## Dependencies

This component requires:

- `framer-motion` - For animations
- `clsx` - For class name utilities (via `@/lib/utils`)
- Tailwind CSS - For styling

## Example: Portfolio Integration

See `/app/featured-work/page.tsx` for a complete example integrated into a portfolio website.

## Notes

- Component uses `use client` directive for interactivity
- Images are positioned absolutely for overlapping effects
- Mobile devices get simplified interactions (no mouse effects)
- Navigation is accessible with proper ARIA labels