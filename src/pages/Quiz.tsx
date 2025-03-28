
import { useState } from "react";
import Container from "@/components/Container";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

const Quiz = () => {
  const questions: Question[] = [
    {
      id: 1,
      question: "Which of the following best describes neural networks?",
      options: [
        "A type of machine learning algorithm that uses decision trees",
        "Computational models inspired by the human brain's structure",
        "A statistical method for regression analysis",
        "A rule-based expert system"
      ],
      answer: 1,
      explanation: "Neural networks are computational models that are inspired by the way biological neural networks in the human brain process information."
    },
    {
      id: 2,
      question: "What is the purpose of activation functions in neural networks?",
      options: [
        "To initialize the weights of the network",
        "To reduce the learning rate during training",
        "To introduce non-linearity to enable complex pattern recognition",
        "To prevent overfitting by regularizing the model"
      ],
      answer: 2,
      explanation: "Activation functions introduce non-linearity into the neural network, which allows it to learn and perform more complex tasks beyond what a simple linear model could achieve."
    },
    {
      id: 3,
      question: "What is backpropagation in the context of neural networks?",
      options: [
        "A method for initializing network weights",
        "The process of reducing the network size by removing neurons",
        "The process of calculating error gradients and updating weights",
        "A technique for visualizing neural network activations"
      ],
      answer: 2,
      explanation: "Backpropagation is an algorithm used to train neural networks by calculating the gradient of the loss function with respect to the weights, and then updating the weights to minimize the loss."
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [revealed, setRevealed] = useState<boolean[]>(Array(questions.length).fill(false));
  const [score, setScore] = useState<number | null>(null);

  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    if (revealed[questionIndex]) return;

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleRevealAnswer = (questionIndex: number) => {
    const newRevealed = [...revealed];
    newRevealed[questionIndex] = true;
    setRevealed(newRevealed);
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setRevealed(Array(questions.length).fill(true));
  };

  const resetQuiz = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
    setRevealed(Array(questions.length).fill(false));
    setScore(null);
  };

  return (
    <div className="bg-explainly-lightGray min-h-screen">
      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Generated Quiz</h1>
            <p className="text-lg text-explainly-gray">
              Test your knowledge with these questions based on the neural networks summary.
            </p>
          </div>

          <div className="space-y-8 mb-8 animate-slide-up">
            {questions.map((question, qIndex) => (
              <div key={question.id} className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Question {question.id}: {question.question}
                </h3>
                
                <div className="space-y-3 mb-6">
                  {question.options.map((option, oIndex) => (
                    <div
                      key={oIndex}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedAnswers[qIndex] === oIndex 
                          ? revealed[qIndex]
                            ? oIndex === question.answer
                              ? "border-green-400 bg-green-50"
                              : "border-red-400 bg-red-50"
                            : "border-explainly-blue bg-blue-50"
                          : revealed[qIndex] && oIndex === question.answer
                            ? "border-green-400 bg-green-50"
                            : "border-gray-200 hover:border-explainly-blue"
                      }`}
                      onClick={() => handleSelectAnswer(qIndex, oIndex)}
                    >
                      <div className="flex items-start">
                        <div className="mr-3">
                          {revealed[qIndex] ? (
                            oIndex === question.answer ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : selectedAnswers[qIndex] === oIndex ? (
                              <XCircle className="w-5 h-5 text-red-500" />
                            ) : (
                              <div className="w-5 h-5 border border-gray-300 rounded-full"></div>
                            )
                          ) : (
                            <div className={`w-5 h-5 border rounded-full ${
                              selectedAnswers[qIndex] === oIndex 
                                ? "bg-explainly-blue border-explainly-blue" 
                                : "border-gray-300"
                            }`}></div>
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {revealed[qIndex] && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mt-4">
                    <h4 className="font-semibold text-explainly-navy mb-2">Explanation:</h4>
                    <p className="text-explainly-gray">{question.explanation}</p>
                  </div>
                )}

                {!revealed[qIndex] && selectedAnswers[qIndex] !== null && (
                  <button
                    onClick={() => handleRevealAnswer(qIndex)}
                    className="text-explainly-blue font-medium hover:underline"
                  >
                    Check Answer
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
            <div>
              {score !== null && (
                <div className="text-lg font-medium">
                  Your score: <span className="text-explainly-blue">{score}/{questions.length}</span>
                </div>
              )}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={score === null ? calculateScore : resetQuiz}
                className="btn-primary flex items-center"
              >
                {score === null ? (
                  "Submit Quiz"
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset Quiz
                  </>
                )}
              </button>
              <Link to="/flashcards" className="btn-secondary">
                Try Flashcards
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Quiz;
