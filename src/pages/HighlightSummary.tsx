
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
              ✨ Summary Highlighting is under development
            </h1>
            
            <p className="text-lg text-explainly-gray mb-8">
              We're working on advanced highlighting features to help you identify key concepts, 
              terms, and relationships in your summaries automatically. 
              This will make studying even more efficient.
            </p>
            
            <div className="w-full h-40 bg-explainly-lightGray rounded-lg flex items-center justify-center mb-8">
              <div className="w-3/4">
                <div className="h-4 bg-gray-300 rounded-full w-full mb-3"></div>
                <div className="h-4 bg-gray-300 rounded-full w-5/6 mb-3"></div>
                <div className="h-4 bg-blue-300 rounded-full w-4/6 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded-full w-full mb-3"></div>
                <div className="h-4 bg-blue-300 rounded-full w-3/6"></div>
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
