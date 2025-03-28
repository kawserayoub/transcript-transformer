
import { useState, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { Upload, Loader } from "lucide-react";
import Container from "@/components/Container";
import SummaryCard from "@/components/SummaryCard";
import { supabase } from "@/integrations/supabase/client";

const Demo = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [summaryResult, setSummaryResult] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const steps = [
    "🧹 Cleaning the Transcript (someone had to)",
    "🧠 Harvesting Intelligence",
    "📄 Hang on...",
    "🫸 Reviewing... silently",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const uploadToSupabase = async (file: File): Promise<string> => {
    try {
      // Read the file as text
      const fileContent = await file.text();
      
      // Upload to Supabase transcripts table
      const { data, error } = await supabase
        .from('transcripts')
        .insert({
          content: fileContent,
          file_name: file.name,
          file_type: file.type,
          processed: false
        })
        .select();

      if (error) {
        console.error("Supabase upload error:", error);
        throw new Error("Failed to save transcript to database");
      }

      console.log("File uploaded to Supabase:", data);
      return data[0].id;
    } catch (error) {
      console.error("Error in uploadToSupabase:", error);
      throw error;
    }
  };

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
      // First upload to Supabase
      const transcriptId = await uploadToSupabase(file);
      
      // Then process with n8n webhook
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "https://almanakmap.app.n8n.cloud/webhook-test/explainly.ai",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const summary = data.summary || "Here's a summary of the content you submitted.";
      
      // Store the summary in Supabase
      const { error: summaryError } = await supabase
        .from('summaries')
        .insert({
          content: summary,
          transcript_id: transcriptId
        });

      if (summaryError) {
        console.error("Failed to save summary:", summaryError);
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

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

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
                <div 
                  className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    dragActive ? "border-explainly-blue bg-blue-50" : "border-gray-300 hover:border-explainly-blue"
                  }`}
                  onClick={triggerFileInput}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileChange} 
                    className="hidden" 
                  />
                  
                  <Upload className="w-12 h-12 text-explainly-blue mb-4" />
                  
                  {file ? (
                    <div className="text-center">
                      <p className="font-medium text-explainly-navy">
                        {file.name}
                      </p>
                      <p className="text-sm text-explainly-gray">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="font-medium text-explainly-navy mb-2">
                        Drag and drop a file here, or click to browse
                      </p>
                      <p className="text-sm text-explainly-gray">
                        Supports any file format
                      </p>
                    </div>
                  )}
                </div>

                {isLoading ? (
                  <div className="mt-8">
                    <div className="flex items-center justify-center mb-4">
                      <Loader className="w-6 h-6 text-explainly-blue animate-spin mr-2" />
                      <span className="font-medium text-explainly-navy">
                        {steps[currentStep]}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="gradient-bg h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full btn-primary mt-6"
                    disabled={!file || isLoading}
                  >
                    Process File
                  </button>
                )}
              </form>
            ) : (
              <div>
                <SummaryCard 
                  summaryText={summaryResult} 
                  title="AI-Generated Summary"
                />
                <button 
                  onClick={resetDemo}
                  className="w-full btn-secondary mt-6"
                >
                  Process Another File
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Demo;
