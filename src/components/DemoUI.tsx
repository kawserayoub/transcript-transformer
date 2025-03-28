
import { File } from "lucide-react";
import Container from "@/components/Container";
import SummaryCard from "@/components/SummaryCard";
import FileUploader from "@/components/FileUploader";
import ProcessingStatus from "@/components/ProcessingStatus";
import { Button } from "@/components/ui/button";

interface DemoUIProps {
  isLoading: boolean;
  currentStep: number;
  steps: string[];
  file: File | null;
  setFile: (file: File | null) => void;
  summaryResult: string | null;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetDemo: () => void;
}

const DemoUI = ({
  isLoading,
  currentStep,
  steps,
  file,
  setFile,
  summaryResult,
  handleSubmit,
  resetDemo,
}: DemoUIProps) => {
  return (
    <div className="bg-explainly-lightGray min-h-screen">
      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Try the explainly.ai Demo</h1>
            <p className="text-lg text-explainly-gray">
              Upload any transcript file and our AI will transform it into a concise, 
              intelligent summary you can use for learning.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 animate-slide-up">
            {!summaryResult ? (
              <form onSubmit={handleSubmit}>
                <FileUploader file={file} setFile={setFile} />

                {isLoading ? (
                  <ProcessingStatus currentStep={currentStep} steps={steps} />
                ) : (
                  <Button
                    type="submit"
                    className="w-full btn-primary mt-6"
                    disabled={!file || isLoading}
                  >
                    Process File
                  </Button>
                )}
              </form>
            ) : (
              <div>
                <SummaryCard 
                  summaryText={summaryResult} 
                  title="AI-Generated Summary"
                />
                <Button 
                  onClick={resetDemo}
                  className="w-full btn-secondary mt-6"
                >
                  Process Another File
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DemoUI;
