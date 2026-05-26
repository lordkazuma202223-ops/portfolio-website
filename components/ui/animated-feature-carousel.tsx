"use client"

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react"
import { cn } from "@/lib/utils"
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "framer-motion"

// --- Types ---
type StaticImageData = string;

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>
  "--y": MotionValue<string>
}

interface CardProps {
  bgClass?: string
}

interface ImageSet {
  step1img1: StaticImageData
  step1img2: StaticImageData
  step2img1: StaticImageData
  step2img2: StaticImageData
  step3img: StaticImageData
  step4img: StaticImageData
  alt: string
}

interface FeatureCarouselProps extends CardProps {
  step1img1Class?: string
  step1img2Class?: string
  step2img1Class?: string
  step2img2Class?: string
  step3imgClass?: string
  step4imgClass?: string
  image: ImageSet
  steps?: readonly Step[]
  interval?: number
}

interface StepImageProps {
  src: StaticImageData
  alt: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
}

interface Step {
  id: string
  name: string
  title: string
  description: string
  skills?: string[]
}

// --- Constants ---
const TOTAL_STEPS = 4

const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
} as const

type AnimationPreset = keyof typeof ANIMATION_PRESETS

interface AnimatedStepImageProps extends StepImageProps {
  preset?: AnimationPreset
  delay?: number
  onAnimationComplete?: () => void
}

// --- Hooks ---
function useNumberCycler(totalSteps: number = TOTAL_STEPS, interval: number = 5000) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps);
    }, interval);

    return () => clearTimeout(timerId);
  }, [currentNumber, totalSteps, interval]);

  const setStep = useCallback((stepIndex: number) => {
      setCurrentNumber(stepIndex % totalSteps);
  }, [totalSteps]);

  return { currentNumber, setStep };
}


function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }
    checkDevice()
    window.addEventListener("resize", checkDevice)
    return () => window.removeEventListener("resize", checkDevice)
  }, [])
  return isMobile
}

// --- Components ---
function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className={cn("h-4 w-4", className)} {...props} >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

const stepVariants: Variants = {
  inactive: { scale: 0.9, opacity: 0.7 },
  active: { scale: 1, opacity: 1 },
}

const StepImage = forwardRef<HTMLImageElement, StepImageProps>(
  ({ src, alt, className, style, ...props }, ref) => {
    return (
      <img
        ref={ref}
        alt={alt}
        className={className}
        src={src}
        style={{ position: "absolute", userSelect: "none", maxWidth: "unset", ...style }}
        {...props}
      />
    )
  }
)
StepImage.displayName = "StepImage"

const MotionStepImage = motion(StepImage)

const AnimatedStepImage = ({ preset = "fadeInScale", delay = 0, ...props }: AnimatedStepImageProps) => {
  const presetConfig = ANIMATION_PRESETS[preset]
  return <MotionStepImage {...props} {...presetConfig} transition={{ ...presetConfig.transition, delay }} />
}

interface FeatureCardProps {
  step: number;
  steps: readonly Step[];
  renderContent: () => React.ReactNode;
}

function FeatureCard({ step, steps, renderContent }: FeatureCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return (
    <motion.div
      className="animated-cards group relative w-full rounded-2xl"
      onMouseMove={handleMouseMove}
      style={{ "--x": useMotionTemplate`${mouseX}px`, "--y": useMotionTemplate`${mouseY}px` } as WrapperStyle}
    >
      <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex flex-col md:flex-row m-6 min-h-[500px] w-full gap-8">
          <div className="flex w-full md:w-1/2 flex-col gap-4 justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
                >
                    {steps[step].name}
                </motion.div>
                <motion.h2
                  className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
                >
                  {steps[step].title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
                >
                  <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                    {steps[step].description}
                  </p>
                </motion.div>
                {steps[step].skills && steps[step].skills.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
                    className="flex flex-wrap gap-2"
                  >
                    {steps[step].skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex w-full md:w-1/2 relative items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/30 dark:to-slate-900/30 rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div key={step} {...ANIMATION_PRESETS.fadeInScale} className="w-full h-full relative flex items-center justify-center p-6">
                    {renderContent()}
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StepsNav({ steps: stepItems, current, onChange }: { steps: readonly Step[]; current: number; onChange: (index: number) => void; }) {
    return (
        <nav aria-label="Progress" className="flex justify-center px-4">
            <ol className="flex w-full flex-wrap items-center justify-center gap-2" role="list">
                {stepItems.map((step, stepIdx) => {
                    const isCompleted = current > stepIdx;
                    const isCurrent = current === stepIdx;
                    return (
                        <motion.li key={step.name} initial="inactive" animate={isCurrent ? "active" : "inactive"} variants={stepVariants} transition={{ duration: 0.3 }} className="relative" >
                            <button
                                type="button"
                                className={cn(
                                    "group flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500 dark:focus-visible:ring-offset-black",
                                    isCurrent 
                                        ? "bg-slate-600 text-white dark:bg-slate-500" 
                                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                                )}
                                onClick={() => onChange(stepIdx)}
                            >
                                <span className={cn(
                                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                                    isCompleted 
                                        ? "bg-slate-600 text-white dark:bg-slate-500" 
                                        : isCurrent 
                                            ? "bg-slate-400 text-slate-900 dark:bg-slate-400 dark:text-slate-900" 
                                            : "bg-neutral-200 text-neutral-700 group-hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:group-hover:bg-neutral-600"
                                )}>
                                    <span>{stepIdx + 1}</span>
                                </span>
                                <span className="hidden sm:inline-block">{step.name}</span>
                            </button>
                        </motion.li>
                    );
                })}
            </ol>
        </nav>
    );
}

const defaultClasses = {
  img: "rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-black/10 dark:shadow-neutral-950/50",
  step1img1: "w-[35%] left-[8%] top-[20%]",
  step1img2: "w-[35%] right-[8%] top-[45%]",
  step2img1: "w-[35%] left-[8%] top-[25%]",
  step2img2: "w-[35%] right-[8%] top-[50%]",
  step3img: "w-[70%] left-[15%] top-[35%]",
  step4img: "w-[70%] left-[15%] top-[35%]",
} as const

export function FeatureCarousel({
  image,
  steps: customSteps,
  interval = 5000,
  step1img1Class = defaultClasses.step1img1,
  step1img2Class = defaultClasses.step1img2,
  step2img1Class = defaultClasses.step2img1,
  step2img2Class = defaultClasses.step2img2,
  step3imgClass = defaultClasses.step3img,
  step4imgClass = defaultClasses.step4img,
  ...props
}: FeatureCarouselProps) {
  const steps = customSteps || [
    {
      id: "1",
      name: "Step 1",
      title: "Seamless Integration",
      description: "Connect your tools and workflows effortlessly. Our platform integrates with hundreds of popular apps.",
    },
    {
      id: "2",
      name: "Step 2",
      title: "Powerful Analytics",
      description: "Gain deep insights with our advanced analytics dashboard. Track your performance and make data-driven decisions.",
    },
    {
      id: "3",
      name: "Step 3",
      title: "Collaborative Workspace",
      description: "Work together in real-time. Share, comment, and edit with your team from anywhere in the world.",
    },
    {
      id: "4",
      name: "Step 4",
      title: "Automated Workflows",
      description: "Put your tasks on autopilot. Create custom automations to save time and reduce manual work.",
    },
  ]

  const { currentNumber: step, setStep } = useNumberCycler(steps.length, interval)

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="relative w-full h-full">
            <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step1img1Class)} src={image.step1img1} preset="slideInLeft" />
            <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step1img2Class)} src={image.step1img2} preset="slideInRight" delay={0.1} />
          </div>
        )
      case 1:
        return (
          <div className="relative w-full h-full">
            <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step2img1Class)} src={image.step2img1} preset="fadeInScale" />
            <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step2img2Class)} src={image.step2img2} preset="fadeInScale" delay={0.1} />
          </div>
        )
      case 2:
        return <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step3imgClass)} src={image.step3img} preset="fadeInScale" />
      case 3:
        return <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step4imgClass)} src={image.step4img} preset="fadeInScale" />
      default: return null
    }
  }

  return (
    <div className="flex flex-col gap-8 w-full p-4">
        <FeatureCard step={step} steps={steps} renderContent={renderStepContent} />
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <StepsNav current={step} onChange={setStep} steps={steps} />
        </motion.div>
    </div>
  )
}