
import { useState, useCallback, useEffect } from "react";
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
  const [transcriptId, setTranscriptId] = useState<string | null>(null);

  const steps = [
    "🧹 Cleaning the Transcript (someone had to)",
    "🧠 Harvesting Intelligence",
    "📄 Hang on...",
    "🫸 Reviewing... silently",
  ];

  // Simulate webhook completion in demo environment
  useEffect(() => {
    if (isLoading && transcriptId && currentStep === steps.length - 1) {
      // Simulate webhook processing completion after the last step
      const timer = setTimeout(() => {
        // Generate a mock summary based on the file type
        const generateMockSummary = () => {
          if (!file) return "Unable to generate summary for this file.";
          
          const fileType = file.type || file.name.split('.').pop()?.toLowerCase() || '';
          
          if (fileType.includes('pdf') || file.name.endsWith('.pdf')) {
            return "This PDF document appears to contain important information related to your topic. The main points include several key concepts that could be useful for your research or project. Consider focusing on sections 2 and 4 which contain the most relevant data for your needs.";
          } else if (fileType.includes('text') || file.name.endsWith('.txt')) {
            return "The text document you uploaded contains approximately 5 main sections with key points in each. The central theme appears to be related to " + (file.name.split('.')[0] || "the topic") + " with supporting evidence and examples throughout.";
          } else {
            return "The document you've uploaded has been analyzed. It contains several sections of relevant information that have been processed. The key takeaways include important points related to your subject matter that can help inform your understanding of the topic.";
          }
        };
        
        const summary = generateMockSummary();
        setSummaryResult(summary);
        
        // In a real environment, this would be done by the webhook
        // Here we're simulating it in the frontend
        if (transcriptId) {
          saveSupabaseSummary(summary, transcriptId);
        }
        
        setIsLoading(false);
      }, 3000); // Wait 3 seconds after the last step
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, currentStep, steps.length, transcriptId, file]);

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
    setTranscriptId(null);

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
      setTranscriptId(transcriptId);
      
      try {
        // Try to send to N8N webhook (this will fail in demo mode)
        await sendToN8NWebhook(filePath);
      } catch (webhookError) {
        console.error("N8N webhook error (expected in demo):", webhookError);
        // We still count the upload as successful
        toast({
          title: "File uploaded successfully",
          description: "Processing your file. Please wait for the summary to be generated.",
        });
      }
      
    } catch (error) {
      console.error("Error processing file:", error);
      toast({
        title: "Processing failed",
        description: "There was an error processing your file. Please try again.",
        variant: "destructive",
      });
      clearInterval(stepInterval);
      setIsLoading(false);
    }
  };

  const resetDemo = useCallback(() => {
    setFile(null);
    setSummaryResult(null);
    setCurrentStep(0);
    setTranscriptId(null);
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
