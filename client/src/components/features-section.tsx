import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, Bot, Users, LineChart, Plug } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: "automation",
    icon: <Bot className="h-5 w-5 mr-2" />,
    label: "Automation",
    title: "Automate Repetitive Tasks",
    description: "Let AI handle your routine workflows while you focus on what matters. Quantum's automation engine can reduce manual work by up to 80%.",
    benefits: [
      "Smart task distribution based on team workload",
      "Automated reporting and status updates",
      "Custom workflow triggers and conditions"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&q=75&fit=crop&w=1200"
  },
  {
    id: "collaboration",
    icon: <Users className="h-5 w-5 mr-2" />,
    label: "Collaboration",
    title: "Seamless Team Collaboration",
    description: "Break down silos with real-time collaboration features. Keep everyone aligned and productive, no matter where they're working from.",
    benefits: [
      "Real-time document editing and commenting",
      "Threaded conversations for context-rich discussions",
      "Virtual workspaces for distributed teams"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&q=75&fit=crop&w=1200"
  },
  {
    id: "analytics",
    icon: <LineChart className="h-5 w-5 mr-2" />,
    label: "Analytics",
    title: "Powerful Analytics & Insights",
    description: "Make data-driven decisions with comprehensive analytics. Visualize performance, identify trends, and optimize your processes.",
    benefits: [
      "Customizable dashboards with key metrics",
      "Predictive analytics for resource planning",
      "Exportable reports for stakeholder presentations"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=75&fit=crop&w=1200"
  },
  {
    id: "integration",
    icon: <Plug className="h-5 w-5 mr-2" />,
    label: "Integration",
    title: "Seamless Integrations",
    description: "Connect with your favorite tools. Quantum integrates with 200+ applications to create a unified workflow ecosystem.",
    benefits: [
      "One-click integration with popular tools",
      "Custom API for specialized workflows",
      "Data synchronization across platforms"
    ],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&q=75&fit=crop&w=1200"
  }
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("automation");
  
  return (
    <section id="features" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Teams</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to streamline your workflow, boost productivity, and achieve better results.
          </p>
        </motion.div>

        <div className="mb-12">
          <Tabs defaultValue="automation" value={activeTab} onValueChange={setActiveTab}>
            <div className="overflow-x-auto pb-2 mb-8">
              <TabsList className="bg-transparent">
                {features.map((feature) => (
                  <TabsTrigger 
                    key={feature.id} 
                    value={feature.id}
                    className="px-6 py-3 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=inactive]:text-muted-foreground data-[state=inactive]:border-b-2 data-[state=inactive]:border-transparent font-semibold whitespace-nowrap mr-8"
                  >
                    {feature.icon}
                    {feature.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {features.map((feature) => (
              <TabsContent 
                key={feature.id} 
                value={feature.id} 
                className="outline-none"
              >
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <ul className="space-y-4">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                            <Check className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <p className="ml-3 text-muted-foreground">{benefit}</p>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="mt-8 inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                      Learn more about {feature.label.toLowerCase()}
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
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={feature.image}
                        alt={`${feature.label} Interface`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
