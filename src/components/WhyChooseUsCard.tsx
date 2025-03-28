
import { ReactNode } from "react";

interface WhyChooseUsCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  number: string;
}

const WhyChooseUsCard = ({ title, description, icon, number }: WhyChooseUsCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-explainly-lightGray rounded-full flex items-center justify-center">
        <span className="text-explainly-blue text-2xl font-bold">{number}</span>
      </div>
      <div className="flex flex-col items-start">
        <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-explainly-gray">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
