
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
      // Upload to Supabase to get transcript ID and file path
      // This will now also read and store the actual file content
      const { transcriptId, filePath } = await uploadToSupabase(file);
      
      try {
        // Try to send to N8N webhook (this will fail in demo mode)
        await sendToN8NWebhook(filePath);
      } catch (webhookError) {
        console.error("N8N webhook error (expected in demo):", webhookError);
        // We still count the upload as successful
        toast({
          title: "File uploaded successfully",
          description: "Your file content has been stored in the database.",
        });
      }
      
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
