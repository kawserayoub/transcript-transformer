
import { Link } from "react-router-dom";
import Container from "@/components/Container";
import FeatureCard from "@/components/FeatureCard";
import { Brain, FileText, Zap, Lightbulb, BookOpen, Users } from "lucide-react";

const Landing = () => {
  return (
    <div className="bg-gradient-to-b from-white to-explainly-lightGray">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Understand more. <span className="gradient-text">Faster.</span> <br />
                Powered by AI
              </h1>
              <p className="text-lg md:text-xl text-explainly-gray">
                Transform raw transcripts into intelligent summaries, quizzes, flashcards,
                and more with our AI-powered learning platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/demo" className="btn-primary text-center">
                  Try the Demo
                </Link>
                <Link to="/summary-preview" className="btn-secondary text-center">
                  See Examples
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 animate-slide-up">
              <div className="relative">
                <div className="hero-card">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-2 text-sm text-explainly-gray">Transcript Processing</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-explainly-lightGray rounded-full w-full"></div>
                    <div className="h-4 bg-explainly-lightGray rounded-full w-5/6"></div>
                    <div className="h-4 bg-explainly-lightGray rounded-full w-4/5"></div>
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-explainly-lightGray">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="ml-3 font-medium">AI Summary</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-white rounded-full w-full"></div>
                      <div className="h-3 bg-white rounded-full w-5/6"></div>
                      <div className="h-3 bg-white rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-explainly-blue rounded-xl opacity-10"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unlock the Power of Your Content
            </h2>
            <p className="text-lg text-explainly-gray max-w-3xl mx-auto">
              explainly.ai transforms raw transcripts into structured learning materials, saving
              you hours of manual work and helping you retain information more effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            <FeatureCard
              title="Smart Summarization"
              description="Get concise, accurate summaries from long transcripts in seconds."
              icon={<FileText className="w-8 h-8 text-white" />}
            />
            <FeatureCard
              title="AI-Generated Quizzes"
              description="Test your knowledge with automatically created quizzes."
              icon={<Brain className="w-8 h-8 text-white" />}
            />
            <FeatureCard
              title="Interactive Flashcards"
              description="Study efficiently with AI-created flashcards."
              icon={<Zap className="w-8 h-8 text-white" />}
            />
            <FeatureCard
              title="Concept Highlighting"
              description="Identify key concepts and ideas at a glance."
              icon={<Lightbulb className="w-8 h-8 text-white" />}
            />
            <FeatureCard
              title="Study Recommendations"
              description="Get personalized study plans based on content."
              icon={<BookOpen className="w-8 h-8 text-white" />}
            />
            <FeatureCard
              title="Multiple Use Cases"
              description="Perfect for students, researchers, and professionals."
              icon={<Users className="w-8 h-8 text-white" />}
            />
          </div>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose explainly.ai?
            </h2>
            <p className="text-lg text-explainly-gray max-w-3xl mx-auto">
              Our platform stands out with personalized learning experiences tailored to your needs.
            </p>
          </div>

          <div className="overflow-x-auto animate-slide-up">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-explainly-lightGray">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center">explainly.ai</th>
                  <th className="p-4 text-center">Traditional Notes</th>
                  <th className="p-4 text-center">Generic AI Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Personalized Learning</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                  <td className="p-4 text-center text-yellow-500">Limited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Performance Analysis</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Interactive Exercises</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                  <td className="p-4 text-center text-yellow-500">Limited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Visual Learning Tools</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Audience Range</td>
                  <td className="p-4 text-center text-green-500">Broad</td>
                  <td className="p-4 text-center text-yellow-500">Limited</td>
                  <td className="p-4 text-center text-yellow-500">Medium</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Educator Support</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                  <td className="p-4 text-center text-yellow-500">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-explainly-lightGray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Tailored Learning Experience</h3>
              <p className="text-explainly-gray">
                Our tool reshapes transcripts into highly personalized exercises, summaries, 
                and visual aids based on your preferences and learning style.
              </p>
            </div>

            <div className="bg-explainly-lightGray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Beyond Just Summaries</h3>
              <p className="text-explainly-gray">
                We evaluate performance, identify areas for improvement, and provide actionable 
                feedback to support knowledge retention and growth.
              </p>
            </div>

            <div className="bg-explainly-lightGray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">For Everyone</h3>
              <p className="text-explainly-gray">
                Whether you're a student, educator, parent, corporate trainer, or lifelong 
                learner, our platform adapts to your specific needs.
              </p>
            </div>

            <div className="bg-explainly-lightGray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Empowering Educators</h3>
              <p className="text-explainly-gray">
                Create interactive teaching materials quickly and efficiently, saving time 
                while enhancing the quality of lessons.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your learning experience?
            </h2>
            <p className="text-lg text-explainly-gray mb-8 max-w-2xl mx-auto">
              Try our demo today and experience the power of AI-enhanced learning.
              No sign-up required.
            </p>
            <Link to="/demo" className="btn-primary inline-block">
              Try the Demo Now
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Landing;
