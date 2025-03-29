
export const sendToN8NWebhook = async (filePath: string): Promise<any> => {
  try {
    // Using the correct webhook URL
    const webhookUrl = "https://almanakmap.app.n8n.cloud/webhook/explainly.ai";
    
    console.log("Sending webhook request to:", webhookUrl);
    console.log("With file path:", filePath);
    
    // Set up proper headers and body
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", // Add this to help with CORS issues
      body: JSON.stringify({ file_path: filePath }),
    });

    // When using no-cors, we won't get a full response
    console.log("Webhook request sent, waiting for processing");
    
    // Return whether the request was successful (no detailed response available with no-cors)
    return true;
  } catch (error) {
    console.error("Error sending to N8N webhook:", error);
    throw new Error("Failed to communicate with processing service. Please try again later.");
  }
};
