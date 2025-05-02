import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(99,102,241,0.1),transparent)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to transform your workflow?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of teams already using Quantum to boost productivity and streamline operations.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button size="lg">
                  Get Started Free
                </Button>
                <Button variant="outline" size="lg">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&q=75&fit=crop&w=800"
                alt="Team collaborating on Quantum platform"
                className="rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-full bg-green-500/20 blur-2xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
