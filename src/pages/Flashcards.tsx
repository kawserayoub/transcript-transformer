
import { useState } from "react";
import Container from "@/components/Container";
import { ArrowLeft, ArrowRight, RotateCw } from "lucide-react";
import { Link } from "react-router-dom";

interface Flashcard {
  id: number;
  front: string;
  back: string;
}

const Flashcards = () => {
  const flashcards: Flashcard[] = [
    {
      id: 1,
      front: "What are the main components of a neural network?",
      back: "Input Layer, Hidden Layers, Output Layer, and weighted connections between neurons. The input layer receives data, hidden layers process it, and the output layer produces the final result."
    },
    {
      id: 2,
      front: "What is backpropagation?",
      back: "Backpropagation is the main algorithm used to train neural networks. It works by calculating the gradient of the loss function with respect to the network weights, and then updating the weights to minimize the loss."
    },
    {
      id: 3,
      front: "What do activation functions do in neural networks?",
      back: "Activation functions introduce non-linearity into neural networks, which allows them to learn complex patterns and relationships in data that wouldn't be possible with just linear operations."
    },
    {
      id: 4,
      front: "Name some applications of neural networks",
      back: "Neural networks are used in image and speech recognition, natural language processing, game playing, and medical diagnosis, among many other applications."
    }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="bg-explainly-lightGray min-h-screen">
      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Generated Flashcards</h1>
            <p className="text-lg text-explainly-gray">
              Review key concepts through interactive flashcards. Click on a card to flip it.
            </p>
          </div>

          <div 
            className="relative h-64 sm:h-80 md:h-96 mb-8 cursor-pointer perspective-1000 animate-slide-up"
            onClick={flipCard}
          >
            <div 
              className={`absolute inset-0 transition-all duration-500 transform preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              style={{ 
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" 
              }}
            >
              {/* Front of the card */}
              <div 
                className="absolute inset-0 bg-white rounded-xl shadow-md p-6 md:p-8 flex items-center justify-center backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="text-center">
                  <div className="text-sm text-explainly-gray mb-4">Click to flip</div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {flashcards[currentCardIndex].front}
                  </h3>
                </div>
              </div>
              
              {/* Back of the card */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-explainly-blue to-explainly-teal rounded-xl shadow-md p-6 md:p-8 flex items-center justify-center text-white backface-hidden"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)" 
                }}
              >
                <div className="text-center">
                  <div className="text-sm text-white/80 mb-4">Click to flip back</div>
                  <p className="text-lg">
                    {flashcards[currentCardIndex].back}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between animate-fade-in">
            <button
              onClick={prevCard}
              disabled={currentCardIndex === 0}
              className={`p-3 rounded-full ${
                currentCardIndex === 0 
                  ? "text-gray-300 cursor-not-allowed" 
                  : "text-explainly-blue hover:bg-blue-50"
              }`}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <button
                onClick={flipCard}
                className="flex items-center justify-center px-4 py-2 rounded-full text-explainly-blue hover:bg-blue-50"
              >
                <RotateCw className="w-4 h-4 mr-2" />
                Flip Card
              </button>
              <div className="text-sm text-explainly-gray mt-2">
                Card {currentCardIndex + 1} of {flashcards.length}
              </div>
            </div>
            
            <button
              onClick={nextCard}
              disabled={currentCardIndex === flashcards.length - 1}
              className={`p-3 rounded-full ${
                currentCardIndex === flashcards.length - 1 
                  ? "text-gray-300 cursor-not-allowed" 
                  : "text-explainly-blue hover:bg-blue-50"
              }`}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-12 text-center">
            <Link to="/quiz" className="btn-secondary inline-block mr-4">
              Try the Quiz
            </Link>
            <Link to="/summary-preview" className="btn-primary inline-block">
              Back to Summary
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Flashcards;
