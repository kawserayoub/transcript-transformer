
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
      console.error("Failed to save summary:", error);
      throw error;
    }
  } catch (error) {
    console.error("Error storing summary:", error);
    throw error;
  }
};
