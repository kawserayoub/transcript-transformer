
import { Loader } from "lucide-react";

interface ProcessingStatusProps {
  currentStep: number;
  steps: string[];
}

const ProcessingStatus = ({ currentStep, steps }: ProcessingStatusProps) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-center mb-4">
        <Loader className="w-6 h-6 text-explainly-blue animate-spin mr-2" />
        <span className="font-medium text-explainly-navy">
          {steps[currentStep]}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="gradient-bg h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProcessingStatus;
