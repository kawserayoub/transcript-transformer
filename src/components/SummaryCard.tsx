
import { useState } from "react";
import { Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";

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
        <ReactMarkdown 
          className="text-explainly-gray markdown-content"
          components={{
            h1: ({node, ...props}) => <h1 className="text-2xl font-bold mb-4 text-explainly-navy" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-xl font-bold mb-3 text-explainly-navy" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-lg font-bold mb-2 text-explainly-navy" {...props} />,
            p: ({node, ...props}) => <p className="mb-4 text-explainly-gray" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4" {...props} />,
            li: ({node, ...props}) => <li className="mb-1" {...props} />,
            strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
            em: ({node, ...props}) => <em className="italic" {...props} />,
            a: ({node, ...props}) => <a className="text-explainly-blue hover:underline" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-explainly-blue pl-4 italic my-4" {...props} />,
            code: ({node, ...props}) => <code className="bg-gray-100 px-1 py-0.5 rounded" {...props} />,
            pre: ({node, ...props}) => <pre className="bg-gray-100 p-3 rounded mb-4 overflow-x-auto" {...props} />
          }}
        >
          {summaryText}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default SummaryCard;
