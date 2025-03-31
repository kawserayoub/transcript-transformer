
import { useState, useCallback, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import DemoUI from "@/components/DemoUI";
import { uploadToSupabase, saveSupabaseSummary, getSummaryForTranscript } from "@/services/SupabaseService";
import { sendToN8NWebhook } from "@/services/WebhookService";
import { supabase } from "@/integrations/supabase/client";

const Demo = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [summaryResult, setSummaryResult] = useState<string | null>(null);
  const [transcriptId, setTranscriptId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const steps = [
    "🧹 Cleaning the Transcript (someone had to)",
    "🧠 Harvesting Intelligence",
    "📄 Hang on...",
    "🫸 Reviewing... silently",
  ];

  // Listen for realtime updates to the summaries table
  useEffect(() => {
    if (!transcriptId) return;

    // First, let's check if a summary already exists
    const checkExistingSummary = async () => {
      try {
        const existingSummary = await getSummaryForTranscript(transcriptId);
        if (existingSummary) {
          setSummaryResult(existingSummary);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error checking for existing summary:", error);
        setError("Failed to retrieve existing summary.");
        setIsLoading(false);
      }
    };

    checkExistingSummary();

    // Set up realtime subscription to listen for new summaries
    const channel = supabase
      .channel('summaries-updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'summaries',
          filter: `transcript_id=eq.${transcriptId}`
        },
        async (payload) => {
          console.log("New summary received:", payload);
          if (payload.new && payload.new.content) {
            setSummaryResult(payload.new.content);
            setIsLoading(false);
            setError(null);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [transcriptId]);

  // Set a timeout for the processing
  useEffect(() => {
    if (!isLoading || !transcriptId) return;
    
    // Set a timeout of 1 minute for processing
    const timeoutId = setTimeout(() => {
      if (isLoading && !summaryResult) {
        setIsLoading(false);
        setError("Processing timed out. The service might be experiencing delays. Please try again later.");
        toast({
          title: "Processing timed out",
          description: "The service is taking longer than expected. Please try again later.",
          variant: "destructive",
        });
      }
    }, 60000); // 1 minute timeout (60,000 milliseconds)
    
    return () => clearTimeout(timeoutId);
  }, [isLoading, transcriptId, summaryResult, toast]);

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
    setError(null);

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
      const { transcriptId, filePath } = await uploadToSupabase(file);
      setTranscriptId(transcriptId);
      
      try {
        // Send to N8N webhook
        await sendToN8NWebhook(filePath);
        
        toast({
          title: "File uploaded successfully",
          description: "Processing your file. Please wait for the summary to be generated.",
        });
      } catch (webhookError) {
        console.error("N8N webhook error:", webhookError);
        clearInterval(stepInterval);
        setIsLoading(false);
        setError("Failed to process the file. The processing service might be down.");
        
        toast({
          title: "Processing failed",
          description: "There was an error processing your file. Please try again later.",
          variant: "destructive",
        });
      }
      
    } catch (error) {
      console.error("Error processing file:", error);
      clearInterval(stepInterval);
      setIsLoading(false);
      setError("Failed to upload the file. Please check your connection and try again.");
      
      toast({
        title: "Upload failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive",
      });
    }
  };

  const resetDemo = useCallback(() => {
    setFile(null);
    setSummaryResult(null);
    setCurrentStep(0);
    setTranscriptId(null);
    setError(null);
  }, []);

  return (
    <DemoUI
      isLoading={isLoading}
      currentStep={currentStep}
      steps={steps}
      file={file}
      setFile={setFile}
      summaryResult={summaryResult}
      error={error}
      handleSubmit={handleSubmit}
      resetDemo={resetDemo}
    />
  );
};

export default Demo;
