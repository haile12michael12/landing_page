import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type StatProps = {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
};

const statItems = [
  { value: 10000, label: "Happy Customers" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 35, suffix: "%", label: "Time Saved" },
  { value: 200, label: "Integrations" }
];

function StatCard({ value, suffix = "", label, delay = 0 }: StatProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const counterRef = useRef({ value: 0 });
  const valueDisplayRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 }
        });
        
        // Animate counter
        let startTimestamp: number | null = null;
        const duration = 2000; // ms
        
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          
          // Easing function
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          counterRef.current.value = Math.floor(value * easeOutQuart);
          
          if (valueDisplayRef.current) {
            valueDisplayRef.current.textContent = `${counterRef.current.value.toLocaleString()}${suffix}`;
          }
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        
        window.requestAnimationFrame(step);
      }, delay);
    }
  }, [isInView, value, suffix, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
    >
      <div className="text-4xl sm:text-5xl font-bold mb-2 text-white" ref={valueDisplayRef}>
        0{suffix}
      </div>
      <p className="text-white/80 text-lg">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(99,102,241,0.8),rgba(99,102,241,1))]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Teams Worldwide</h2>
          <p className="text-lg text-white/80">
            Join thousands of teams already using Quantum to transform their workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statItems.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
