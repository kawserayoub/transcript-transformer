
import Container from "@/components/Container";
import { Brain, Layers, BookOpen, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const AIProcessing = () => {
  return (
    <div className="bg-explainly-lightGray min-h-screen">
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
              <Layers className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">
              📊 Content Visualization
            </h1>
            
            <p className="text-lg text-explainly-gray mb-8">
              Soon you'll be able to visualize your learning materials in different formats,
              helping you understand complex concepts better through visual representation.
            </p>
            
            <div className="w-full bg-explainly-lightGray rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                      <h3 className="font-medium flex items-center text-blue-700">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Concept Map
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="relative h-44 bg-white rounded-md border border-gray-200">
                        {/* Concept map visualization */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                          <span className="text-sm font-medium text-blue-700">Neural Networks</span>
                        </div>
                        
                        {/* Connected nodes */}
                        <div className="absolute top-[30%] left-[20%] w-16 h-16 rounded-full bg-green-100 flex items-center justify-center border border-green-200 text-xs text-green-700 font-medium">
                          Input Layer
                        </div>
                        
                        <div className="absolute top-[30%] right-[20%] w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200 text-xs text-purple-700 font-medium">
                          Hidden Layer
                        </div>
                        
                        <div className="absolute bottom-[20%] left-[30%] w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center border border-yellow-200 text-xs text-yellow-700 font-medium">
                          Output Layer
                        </div>
                        
                        {/* Connection lines */}
                        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                          <line x1="40%" y1="50%" x2="28%" y2="30%" className="stroke-blue-400 stroke-1" />
                          <line x1="60%" y1="50%" x2="72%" y2="30%" className="stroke-blue-400 stroke-1" />
                          <line x1="40%" y1="50%" x2="35%" y2="80%" className="stroke-blue-400 stroke-1" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 border-b bg-gradient-to-r from-green-50 to-teal-50">
                      <h3 className="font-medium flex items-center text-green-700">
                        <BarChart className="w-4 h-4 mr-2" />
                        Visual Summary
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="h-44 bg-white rounded-md border border-gray-200 p-3 flex flex-col space-y-2">
                        {/* Title */}
                        <div className="w-full h-5 bg-green-100 rounded animate-pulse"></div>
                        
                        {/* Content visualization */}
                        <div className="flex-1 grid grid-cols-3 gap-2">
                          <div className="flex flex-col space-y-1">
                            <div className="w-full h-3 bg-gray-100 rounded"></div>
                            <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                            <div className="w-5/6 h-3 bg-gray-100 rounded"></div>
                            <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
                          </div>
                          
                          <div className="col-span-2 rounded border border-dashed border-gray-200 flex items-center justify-center">
                            <div className="flex items-end h-24 space-x-2">
                              <div className="h-[30%] w-6 bg-green-200 rounded-t"></div>
                              <div className="h-[50%] w-6 bg-green-300 rounded-t"></div>
                              <div className="h-[70%] w-6 bg-green-400 rounded-t animate-pulse"></div>
                              <div className="h-[60%] w-6 bg-green-500 rounded-t"></div>
                              <div className="h-[80%] w-6 bg-green-600 rounded-t"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
