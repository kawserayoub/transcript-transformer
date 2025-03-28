
import { supabase } from "@/integrations/supabase/client";

export const uploadToSupabase = async (file: File): Promise<{ transcriptId: string, filePath: string }> => {
  try {
    // Generate a unique file path
    const filePathBucket = crypto.randomUUID();
    const filePathName = crypto.randomUUID() + '.' + file.name.split('.').pop();
    const filePath = `${filePathBucket}/${filePathName}`;

    // Read the file content
    const fileContent = await readFileContent(file);

    // Upload to Supabase transcripts table
    const { data, error } = await supabase
      .from('transcripts')
      .insert({
        content: fileContent, // Store actual file content
        file_name: file.name,
        file_type: file.type,
        file_path: filePath,
        processed: false
      })
      .select();

    if (error) {
      console.error("Supabase upload error:", error);
      throw new Error("Failed to save transcript to database");
    }

    console.log("File uploaded to Supabase:", data);
    return { transcriptId: data[0].id, filePath: filePath };
  } catch (error) {
    console.error("Error in uploadToSupabase:", error);
    throw error;
  }
};

// Function to read file content based on its type
const readFileContent = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        if (!event.target || event.target.result === null) {
          resolve("Unable to read file content");
          return;
        }
        
        // Handle different file types
        if (typeof event.target.result === 'string') {
          resolve(event.target.result);
        } else {
          // For binary data, convert to text
          const decoder = new TextDecoder('utf-8');
          const content = decoder.decode(event.target.result);
          resolve(content);
        }
      } catch (error) {
        console.error("Error processing file content:", error);
        resolve("Error reading file: " + (error instanceof Error ? error.message : String(error)));
      }
    };
    
    reader.onerror = () => {
      resolve("Error reading file");
    };
    
    // Read as text for text-based files
    if (file.type.includes('text') || 
        file.type.includes('json') || 
        file.name.endsWith('.txt') || 
        file.name.endsWith('.json') || 
        file.name.endsWith('.csv') ||
        file.name.endsWith('.md')) {
      reader.readAsText(file);
    } 
    // Read as data URL for PDFs and other document formats
    else if (file.type.includes('pdf') || 
             file.type.includes('document') || 
             file.name.endsWith('.pdf') || 
             file.name.endsWith('.doc') || 
             file.name.endsWith('.docx')) {
      reader.readAsDataURL(file);
    } 
    // For other types, try to read as text
    else {
      reader.readAsText(file);
    }
  });
};

export const saveSupabaseSummary = async (summary: string, transcriptId: string) => {
  try {
    const { error } = await supabase
      .from('summaries')
      .insert({
        content: summary,
        transcript_id: transcriptId
      });

    if (error) {
      // Log the error but don't throw - this allows the app to continue
      // even if the summary can't be saved to the database
      console.error("Failed to save summary:", error);
      
      // Update the transcript record to mark it as processed
      try {
        await supabase
          .from('transcripts')
          .update({ processed: true })
          .eq('id', transcriptId);
      } catch (updateError) {
        console.error("Failed to update transcript processed status:", updateError);
      }
      
      return false;
    }
    
    // If summary was saved successfully, mark the transcript as processed
    await supabase
      .from('transcripts')
      .update({ processed: true })
      .eq('id', transcriptId);
      
    return true;
  } catch (error) {
    // Just log the error but don't throw to prevent app from crashing
    console.error("Error storing summary:", error);
    return false;
  }
};
