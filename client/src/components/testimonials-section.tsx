import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    content: "Quantum has transformed how our team collaborates. The automation features alone have saved us countless hours on repetitive tasks.",
    author: {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "Acme Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=80&fit=crop&w=120&h=120"
    },
    rating: 5
  },
  {
    content: "The analytics dashboard gives us insights we never had before. We've been able to optimize our processes and increase efficiency by 40%.",
    author: {
      name: "David Chen",
      role: "CTO",
      company: "TechNova",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=80&fit=crop&w=120&h=120"
    },
    rating: 5
  },
  {
    content: "Customer support is exceptional. Any time we've had questions, the team has been responsive and helpful. The onboarding process was seamless.",
    author: {
      name: "Emily Rodriguez",
      role: "Operations Lead",
      company: "Globex",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&q=80&fit=crop&w=120&h=120"
    },
    rating: 4.5
  },
  {
    content: "The integration capabilities are game-changing. We've connected all our tools, and now everything works together seamlessly.",
    author: {
      name: "Michael Thompson",
      role: "Engineering Manager",
      company: "StartupX",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=80&fit=crop&w=120&h=120"
    },
    rating: 5
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="h-full bg-card rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center mb-6">
        <div className="text-amber-400 flex">
          {Array(5).fill(0).map((_, i) => {
            const isHalf = i + 0.5 === testimonial.rating;
            const isFilled = i < testimonial.rating;
            
            return (
              <Star 
                key={i}
                className={cn(
                  "h-5 w-5",
                  isFilled ? "fill-current" : "fill-none",
                  isHalf && "fill-half" // Custom style for half star
                )}
              />
            );
          })}
        </div>
      </div>
      <blockquote className="mb-6">
        <p className="text-card-foreground mb-6">{testimonial.content}</p>
      </blockquote>
      <div className="flex items-center">
        <img 
          src={testimonial.author.image}
          alt={testimonial.author.name}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-semibold">{testimonial.author.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.author.role}, {testimonial.author.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  // Scroll to active testimonial
  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from the teams that use Quantum every day.
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={containerRef}
            className="flex overflow-x-auto snap-x pb-8 -mx-4 px-4 sm:px-0 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 snap-center"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-slate-300 dark:bg-slate-600"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
