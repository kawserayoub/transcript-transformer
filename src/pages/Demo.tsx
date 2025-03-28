
import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import Container from "@/components/Container";
import SummaryCard from "@/components/SummaryCard";
import FileUploader from "@/components/FileUploader";
import ProcessingStatus from "@/components/ProcessingStatus";
import { uploadToSupabase, saveSupabaseSummary } from "@/services/SupabaseService";
import { sendToN8NWebhook } from "@/services/WebhookService";
import { Button } from "@/components/ui/button";

const Demo = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [summaryResult, setSummaryResult] = useState<string | null>(null);

  const steps = [
    "🧹 Cleaning the Transcript (someone had to)",
    "🧠 Harvesting Intelligence",
    "📄 Hang on...",
    "🫸 Reviewing... silently",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setSummaryResult(null);
    setCurrentStep(0);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500);

    try {
      // First upload to Supabase to get transcript ID and file path
      const { transcriptId, filePath } = await uploadToSupabase(file);
      
      // Now send the file_path to the N8N webhook
      const data = await sendToN8NWebhook(filePath);
      const summary = data.summary || "Here's a summary of the content you submitted.";
      
      // Store the summary in Supabase
      try {
        await saveSupabaseSummary(summary, transcriptId);
      } catch (summaryStoreError) {
        console.error("Error storing summary:", summaryStoreError);
        // Continue execution even if summary storage fails
      }

      setSummaryResult(summary);
      
      toast({
        title: "Success!",
        description: "Your file has been processed and saved successfully.",
      });
    } catch (error) {
      console.error("Error processing file:", error);
      toast({
        title: "Processing failed",
        description: "There was an error processing your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      clearInterval(stepInterval);
      setIsLoading(false);
    }
  };

  const resetDemo = useCallback(() => {
    setFile(null);
    setSummaryResult(null);
    setCurrentStep(0);
  }, []);

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

export default Demo;
