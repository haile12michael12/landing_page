import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Effortlessly", "Instantly", "Intelligently", "Completely"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_40%,rgba(99,102,241,0.12),transparent)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeIn}>
              <Badge className="px-4 py-1 mb-4 bg-primary/10 text-primary">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Introducing Quantum 2.0
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
              variants={fadeIn}
            >
              <span className="block">Streamline Your</span>
              <span className="block text-primary">
                Workflow{" "}
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[wordIndex]}
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
              variants={fadeIn}
            >
              Boost productivity and simplify complex tasks with our intuitive platform. 
              Join thousands of teams already using Quantum to transform their workflow.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={fadeIn}
            >
              <Button size="lg" className="group">
                <span>Get Started Free</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-4 w-4 text-primary" />
                <span>Watch Demo</span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center text-sm text-muted-foreground"
              variants={fadeIn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4 text-green-500"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>No credit card required • 14-day free trial</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <img 
                src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&q=75&fit=crop&w=1200" 
                alt="Quantum Dashboard Interface" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <Badge className="px-3 py-1.5 bg-primary/90 text-white">+28% Efficiency</Badge>
                <Badge className="px-3 py-1.5 bg-slate-700/70 text-white">AI Powered</Badge>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-8 -left-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-6">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Company logos */}
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded opacity-70 hover:opacity-100 transition-opacity"></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
