
import Container from "@/components/Container";
import { Brain, LineChart, BarChart } from "lucide-react";
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
              📊 Learning Analytics
            </h1>
            
            <p className="text-lg text-explainly-gray mb-8">
              Soon you'll be able to visualize your learning progress, track knowledge retention, 
              and identify areas that need more attention.
            </p>
            
            <div className="w-full bg-explainly-lightGray rounded-lg p-6 mb-8">
              <div className="relative h-48 flex items-center justify-center">
                {/* Visualization elements */}
                <div className="absolute w-full h-full">
                  <div className="flex h-full">
                    {/* Progress chart */}
                    <div className="w-1/2 p-3">
                      <div className="bg-white rounded-lg h-full p-3 shadow-sm border border-gray-200 flex flex-col">
                        <div className="text-sm font-medium text-gray-600 mb-2">Learning Progress</div>
                        <div className="flex-1 flex items-end space-x-1">
                          <div className="w-1/5 bg-blue-200 rounded-t-sm h-[20%]"></div>
                          <div className="w-1/5 bg-blue-300 rounded-t-sm h-[35%]"></div>
                          <div className="w-1/5 bg-blue-400 rounded-t-sm h-[50%]"></div>
                          <div className="w-1/5 bg-blue-500 rounded-t-sm h-[65%] animate-pulse"></div>
                          <div className="w-1/5 bg-blue-600 rounded-t-sm h-[80%]"></div>
                        </div>
                        <div className="mt-2 flex justify-between text-xs text-gray-500">
                          <span>Week 1</span>
                          <span>Week 5</span>
                        </div>
                      </div>
                    </div>

                    {/* Knowledge retention */}
                    <div className="w-1/2 p-3">
                      <div className="bg-white rounded-lg h-full p-3 shadow-sm border border-gray-200 flex flex-col">
                        <div className="text-sm font-medium text-gray-600 mb-2">Topic Mastery</div>
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="flex items-center mb-2">
                            <div className="w-24 text-xs text-gray-600">Neural Networks</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="w-24 text-xs text-gray-600">Deep Learning</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-24 text-xs text-gray-600">Algorithms</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics icons */}
                <div className="absolute -top-3 left-1/4 transform -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <LineChart className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute -top-3 right-1/4 transform translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <BarChart className="w-4 h-4 text-white" />
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

export default AIProcessing;
