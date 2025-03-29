
import Container from "@/components/Container";
import { Highlighter } from "lucide-react";
import { Link } from "react-router-dom";

const HighlightSummary = () => {
  return (
    <div className="bg-explainly-lightGray min-h-screen">
      <Container className="py-16">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
              <Highlighter className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">
              ✨ Smart Highlighting
            </h1>
            
            <p className="text-lg text-explainly-gray mb-8">
              We're working on advanced highlighting features to help you identify key concepts, 
              terms, and relationships in your summaries automatically. 
              This will make studying even more efficient.
            </p>
            
            <div className="w-full bg-explainly-lightGray rounded-lg p-6 mb-8">
              <div className="bg-white rounded-md p-4 shadow-sm">
                <div className="space-y-3 text-left">
                  <p className="text-gray-700">Neural networks are computational models inspired by the <span className="bg-yellow-200 px-1">human brain's structure</span> and function. They consist of interconnected nodes or <span className="bg-blue-200 px-1">"neurons"</span> organized in layers.</p>
                  
                  <p className="text-gray-700">The <span className="bg-green-200 px-1">learning process</span> involves adjusting the <span className="bg-pink-200 px-1">weights between connections</span>, optimizing their ability to recognize patterns.</p>
                  
                  <div className="flex items-center justify-between mt-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-200 rounded-sm mr-1"></div>
                      <span>Concepts</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-200 rounded-sm mr-1"></div>
                      <span>Terminology</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-200 rounded-sm mr-1"></div>
                      <span>Processes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-pink-200 rounded-sm mr-1"></div>
                      <span>Key Elements</span>
                    </div>
                  </div>
                </div>
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

export default HighlightSummary;
