
import Container from "@/components/Container";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const AIProcessing = () => {
  return (
    <div className="bg-explainly-lightGray min-h-screen">
      <Container className="py-16">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">
              ⚙️ AI Visualization – Coming Soon!
            </h1>
            
            <p className="text-lg text-explainly-gray mb-8">
              Soon you'll be able to visualize how our AI processes your transcripts,
              from raw text to structured learning materials.
            </p>
            
            <div className="w-full bg-explainly-lightGray rounded-lg p-6 mb-8">
              <div className="relative h-48 flex flex-col justify-between">
                {/* Visualization nodes */}
                <div className="absolute left-0 top-4 w-24 h-24 rounded-lg bg-blue-500 bg-opacity-20 flex items-center justify-center border-2 border-blue-500">
                  <div className="text-blue-700 font-medium text-sm">Raw Text</div>
                </div>
                
                <div className="absolute left-1/3 top-12 w-24 h-24 rounded-lg bg-purple-500 bg-opacity-20 flex items-center justify-center border-2 border-purple-500 animate-pulse">
                  <div className="text-purple-700 font-medium text-sm">AI Processing</div>
                </div>
                
                <div className="absolute right-0 top-4 w-24 h-24 rounded-lg bg-green-500 bg-opacity-20 flex items-center justify-center border-2 border-green-500">
                  <div className="text-green-700 font-medium text-sm">Structured Content</div>
                </div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="24" y1="28" x2="108" y2="36" stroke="#6366f1" strokeWidth="2" strokeDasharray="4" />
                  <line x1="144" y1="36" x2="228" y2="28" stroke="#6366f1" strokeWidth="2" strokeDasharray="4" />
                </svg>
              </div>
            </div>
            
            <Link to="/" className="btn-primary inline-block">
              Coming Soon
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AIProcessing;
