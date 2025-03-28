
import { Link } from "react-router-dom";
import Container from "@/components/Container";
import FeatureCard from "@/components/FeatureCard";
import WhyChooseUsCard from "@/components/WhyChooseUsCard";
import { Brain, FileText, Zap, Lightbulb, BookOpen, Users, Award, Layers } from "lucide-react";

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
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1048&q=80" 
                    alt="Frustrated student struggling with study materials" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-explainly-blue rounded-xl opacity-10"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Explainly</span>
            </h2>
            <p className="text-lg text-explainly-gray max-w-3xl mx-auto">
              Our solution stands out with its focus on personalization, adaptability, and versatility
              that transforms how you learn and teach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            <WhyChooseUsCard
              title="Tailored Learning Experiences"
              description="Unlike competitors, we reshape content into highly personalized exercises based on your unique learning style."
              icon={<Award className="w-6 h-6 text-white" />}
              number="1"
            />
            <WhyChooseUsCard
              title="Performance Evaluation"
              description="We identify areas for improvement and provide actionable feedback to support knowledge retention and growth."
              icon={<Layers className="w-6 h-6 text-white" />}
              number="2"
            />
            <WhyChooseUsCard
              title="Broad Applicability"
              description="Our platform caters to students, educators, corporate trainers, and lifelong learners in both academic and professional settings."
              icon={<Users className="w-6 h-6 text-white" />}
              number="3"
            />
            <WhyChooseUsCard
              title="Educator-Friendly"
              description="Empower educators to create interactive teaching materials quickly, saving time while enhancing lesson quality."
              icon={<BookOpen className="w-6 h-6 text-white" />}
              number="4"
            />
            <WhyChooseUsCard
              title="Interactive Learning Formats"
              description="Support diverse formats like visual aids and interactive exercises for different learning preferences."
              icon={<Zap className="w-6 h-6 text-white" />}
              number="5"
            />
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
