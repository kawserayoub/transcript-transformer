
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
              ⚙️ Processing Flow Visualizer – Coming Soon!
            </h1>
            
            <p className="text-lg text-explainly-gray mb-8">
              Soon you'll be able to visualize how our AI processes your transcripts,
              from raw text to structured learning materials. 
              Get a behind-the-scenes look at the AI in action.
            </p>
            
            <div className="w-full h-40 bg-explainly-lightGray rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center h-full">
                <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
                <div className="w-10 h-2 bg-gray-300"></div>
                <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse delay-150"></div>
                <div className="w-10 h-2 bg-gray-300"></div>
                <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse delay-300"></div>
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
