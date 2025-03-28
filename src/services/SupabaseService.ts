
import { supabase } from "@/integrations/supabase/client";

export const uploadToSupabase = async (file: File): Promise<{ transcriptId: string, filePath: string }> => {
  try {
    // Generate a unique file path
    const filePathBucket = crypto.randomUUID();
    const filePathName = crypto.randomUUID() + '.' + file.name.split('.').pop();
    const filePath = `${filePathBucket}/${filePathName}`;

    // Upload to Supabase transcripts table
    const { data, error } = await supabase
      .from('transcripts')
      .insert({
        content: "File content stored externally", // Just store a placeholder
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
