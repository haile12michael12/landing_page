import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type PlanFeature = {
  included: boolean;
  text: string;
};

type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PlanFeature[];
  isPopular?: boolean;
  buttonVariant: "default" | "outline";
  buttonText: string;
};

const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for small teams and startups",
    monthlyPrice: 29,
    yearlyPrice: 23,
    buttonVariant: "outline",
    buttonText: "Start Free Trial",
    features: [
      { included: true, text: "Up to 5 team members" },
      { included: true, text: "Basic automation features" },
      { included: true, text: "Standard analytics" },
      { included: true, text: "10 integrations" },
      { included: true, text: "Email support" }
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing teams",
    monthlyPrice: 79,
    yearlyPrice: 63,
    isPopular: true,
    buttonVariant: "default",
    buttonText: "Start Free Trial",
    features: [
      { included: true, text: "Up to 20 team members" },
      { included: true, text: "Advanced automation" },
      { included: true, text: "Enhanced analytics" },
      { included: true, text: "50+ integrations" },
      { included: true, text: "Priority support" }
    ]
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 199,
    yearlyPrice: 159,
    buttonVariant: "outline",
    buttonText: "Contact Sales",
    features: [
      { included: true, text: "Unlimited team members" },
      { included: true, text: "Custom automation workflows" },
      { included: true, text: "Advanced reporting & analytics" },
      { included: true, text: "200+ integrations" },
      { included: true, text: "24/7 dedicated support" },
      { included: true, text: "Custom onboarding" }
    ]
  }
];

function PricingCard({ plan, isYearly }: { plan: PricingPlan; isYearly: boolean }) {
  return (
    <motion.div 
      className={`bg-card rounded-xl shadow-sm overflow-hidden ${
        plan.isPopular ? "border-2 border-primary relative" : "border border-slate-200 dark:border-slate-700"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground mb-4">{plan.description}</p>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold">
            ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
          </span>
          <span className="text-muted-foreground ml-2">/month</span>
        </div>
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-muted-foreground">{feature.text}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant={plan.buttonVariant} 
          className="w-full py-6"
        >
          {plan.buttonText}
        </Button>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section id="pricing" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>
          
          <div className="inline-flex items-center p-1 bg-slate-200 dark:bg-slate-700 rounded-lg mb-12">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                !isYearly 
                  ? "bg-background text-foreground" 
                  : "text-muted-foreground"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                isYearly 
                  ? "bg-background text-foreground" 
                  : "text-muted-foreground"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">Looking for a custom solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer tailored solutions for enterprises with specific requirements. Contact our sales team to learn more.
          </p>
          <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
            Contact our sales team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
