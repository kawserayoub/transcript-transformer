
import { Link } from "react-router-dom";
import Container from "@/components/Container";
import SummaryCard from "@/components/SummaryCard";
import { BookOpen, LightbulbIcon } from "lucide-react";

const SummaryPreview = () => {
  const exampleSummary = `# Introduction to Neural Networks

Neural networks are computational models inspired by the human brain's structure and function. They consist of interconnected nodes or "neurons" organized in layers.

## Key Concepts:

1. **Input Layer**: Receives the initial data
2. **Hidden Layers**: Process the information through weighted connections
3. **Output Layer**: Produces the final result
4. **Activation Functions**: Introduce non-linearity to enable complex pattern recognition

Neural networks learn by adjusting the weights between connections, optimizing their ability to recognize patterns and make predictions. This process, called *backpropagation*, involves calculating error gradients and updating weights accordingly.

The remarkable ability of neural networks to find patterns in complex, high-dimensional data has led to breakthroughs in:
- Image and speech recognition
- Natural language processing
- Game playing
- Medical diagnosis

Recent advances in deep learning involve networks with many hidden layers, enabling even more sophisticated learning capabilities.`;

  const highlightedSummary = exampleSummary
    .replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-explainly-blue">$1</span>')
    .replace(/\*(.*?)\*/g, '<span class="italic">$1</span>')
    .replace(/# (.*)/g, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>')
    .replace(/## (.*)/g, '<h3 class="text-lg font-semibold mt-3 mb-2">$1</h3>')
    .replace(/- (.*)/g, '<li class="ml-6 list-disc">$1</li>')
    .split('\n\n').join('</p><p class="mb-3">')
    .split('\n').join('<br>');

  return (
    <div className="bg-explainly-lightGray min-h-screen">
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Summary Preview</h1>
            <p className="text-lg text-explainly-gray">
              See how explainly.ai transforms raw transcripts into clear, structured summaries
              that enhance understanding and retention.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 animate-slide-up">
            <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: `<p class="mb-3">${highlightedSummary}</p>` }} />
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/quiz" className="btn-primary text-center flex-1">
                <div className="flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Generate Quiz
                </div>
              </Link>
              <Link to="/flashcards" className="btn-secondary text-center flex-1">
                <div className="flex items-center justify-center">
                  <LightbulbIcon className="w-5 h-5 mr-2" />
                  Create Flashcards
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-explainly-blue mr-2" />
                Quiz Preview
              </h3>
              <p className="text-explainly-gray mb-4">
                explainly.ai automatically generates quizzes from your content to test your knowledge.
              </p>
              <Link to="/quiz" className="text-explainly-blue font-medium hover:underline inline-flex items-center">
                View Example Quiz
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <LightbulbIcon className="w-5 h-5 text-explainly-blue mr-2" />
                Flashcard Preview
              </h3>
              <p className="text-explainly-gray mb-4">
                Reinforce learning with AI-generated flashcards that help you memorize key concepts.
              </p>
              <Link to="/flashcards" className="text-explainly-blue font-medium hover:underline inline-flex items-center">
                View Example Flashcards
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SummaryPreview;
