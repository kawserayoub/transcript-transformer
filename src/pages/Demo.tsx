
import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import DemoUI from "@/components/DemoUI";
import { uploadToSupabase, saveSupabaseSummary } from "@/services/SupabaseService";
import { sendToN8NWebhook } from "@/services/WebhookService";

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
      
      // Get the summary from the N8N response
      const summary = data.summary;
      
      // Store the summary in Supabase - but don't throw if it fails
      const saveSuccess = await saveSupabaseSummary(summary, transcriptId);
      
      if (!saveSuccess) {
        console.log("Note: Summary was not saved to database due to permissions, but will still be displayed");
      }

      // Set the summary result to be displayed
      setSummaryResult(summary);
      
      toast({
        title: "Success!",
        description: "Your file has been processed successfully.",
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
    <DemoUI
      isLoading={isLoading}
      currentStep={currentStep}
      steps={steps}
      file={file}
      setFile={setFile}
      summaryResult={summaryResult}
      handleSubmit={handleSubmit}
      resetDemo={resetDemo}
    />
  );
};

export default Demo;
