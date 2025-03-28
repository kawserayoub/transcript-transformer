
import { useState } from "react";
import { Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SummaryCardProps {
  summaryText: string;
  title?: string;
}

const SummaryCard = ({ summaryText, title = "Summary" }: SummaryCardProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The summary has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button
          onClick={handleCopy}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <Copy className="h-5 w-5 text-explainly-gray" />
          )}
        </button>
      </div>
      <div className="prose max-w-none">
        <p className="text-explainly-gray whitespace-pre-wrap">{summaryText}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
