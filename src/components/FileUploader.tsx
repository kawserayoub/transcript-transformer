
import { useState, useRef, useCallback } from "react";
import { Upload } from "lucide-react";

interface FileUploaderProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

const FileUploader = ({ file, setFile }: FileUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

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

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return (
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
  );
};

export default FileUploader;
