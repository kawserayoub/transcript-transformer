
import Container from "@/components/Container";
import { Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const StudyTips = () => {
  return (
    <div className="bg-explainly-lightGray min-h-screen">
      <Container className="py-16">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">
              💡 Study Tips Assistant in progress!
            </h1>
            
            <p className="text-lg text-explainly-gray mb-8">
              We're building an AI-powered study assistant that provides personalized 
              learning recommendations based on your content and how you interact with it.
              Optimize your study time with explainly.ai.
            </p>
            
            <div className="w-full bg-explainly-lightGray rounded-lg p-6 mb-8">
              <div className="flex space-x-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gray-300 shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-300 rounded-full w-5/6"></div>
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

export default StudyTips;
