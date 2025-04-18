
import Container from "@/components/Container";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="bg-explainly-lightGray min-h-screen">
      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About explainly.ai</h1>
            <p className="text-lg text-explainly-gray">
              Learn more about our mission to transform learning through AI.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 animate-slide-up">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-explainly-gray mb-6">
              At explainly.ai, we're on a mission to make learning more efficient and effective 
              through the power of artificial intelligence. We believe that everyone deserves 
              access to tools that help them understand and retain information faster and more deeply.
            </p>
            <p className="text-explainly-gray mb-6">
              Our platform transforms raw transcripts from lectures, meetings, podcasts, and other 
              content into structured learning materials that are optimized for comprehension and retention.
              We're building the future of learning by combining cutting-edge AI with proven educational principles.
            </p>
            
            <Separator className="my-8 bg-gradient-to-r from-explainly-blue to-explainly-teal h-0.5 rounded-full" />
            
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-explainly-gray mb-6">
              explainly.ai was created out of a frustration with the inefficiency of traditional learning methods.
              We saw the potential for AI to transform raw information into structured knowledge
              that's easier to understand and remember.
            </p>
            <p className="text-explainly-gray">
              Today, we're building a platform that helps students, professionals, and lifelong 
              learners get more from their educational content, saving time while improving 
              understanding and retention.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-explainly-blue mr-2 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold">Accessibility</h3>
                    <p className="text-explainly-gray text-sm">Making advanced learning tools available to everyone</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-explainly-blue mr-2 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold">Efficiency</h3>
                    <p className="text-explainly-gray text-sm">Respecting your time by optimizing the learning process</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-explainly-blue mr-2 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold">Understanding</h3>
                    <p className="text-explainly-gray text-sm">Prioritizing deep comprehension over shallow memorization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-explainly-blue mr-2 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold">Innovation</h3>
                    <p className="text-explainly-gray text-sm">Continuously improving our AI to serve learners better</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <Link to="/demo" className="btn-primary inline-block px-6 py-3 bg-gradient-to-r from-explainly-blue to-explainly-teal text-white rounded-md hover:opacity-90 transition-all">
              Try Our Demo
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
