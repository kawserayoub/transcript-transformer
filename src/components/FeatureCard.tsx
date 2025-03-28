
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-explainly-gray">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
