import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface PageHeaderProps {
  title: string;
  description: string;
  stage: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

export function PageHeader({ title, description, stage, icon: Icon }: PageHeaderProps) {
  const [, setLocation] = useLocation();

  return (
    <>
      {/* ThaiBev Header */}
      <header className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H5</span>
              </div>
              <h1 className="text-xl font-semibold">HireFlow 5</h1>
            </div>
            
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
              onClick={() => setLocation("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Rail
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Strip */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-6">
            <motion.div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'hsl(var(--chang-green) / 0.2)' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-8 h-8" style={{ color: 'hsl(var(--chang-green))' }} />
            </motion.div>
            
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm text-gray-300 mb-2">{stage}</div>
                <h1 className="text-4xl font-bold mb-3">{title}</h1>
                <p className="text-xl text-gray-300 max-w-3xl">{description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}