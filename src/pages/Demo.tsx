
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
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [transcriptId]);

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
        console.error("N8N webhook error (expected in demo):", webhookError);
        toast({
          title: "File uploaded",
          description: "File uploaded but webhook processing failed. Waiting for N8N to process the file.",
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
