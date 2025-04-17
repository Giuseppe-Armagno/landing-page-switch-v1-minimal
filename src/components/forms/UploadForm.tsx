
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import FileUploader from "@/components/FileUploader";
import LoadingButton from "@/components/LoadingButton";

interface UploadFormProps {
  onNext: () => void;
  onDataChange?: (data: {
    temporalGranularity: string;
    spatialGranularity: string;
    includesDestination: boolean;
  }) => void;
  initialData?: {
    temporalGranularity: string;
    spatialGranularity: string;
    includesDestination: boolean;
  };
}

const temporalOptions = ["5min", "15min", "30min", "1h", "1d"];
const spatialOptions = ["coordinates", "neighborhood", "aggregated zone", "geohash", "zone ID"];

const UploadForm: React.FC<UploadFormProps> = ({ 
  onNext, 
  onDataChange,
  initialData
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [temporalGranularity, setTemporalGranularity] = useState<string>(initialData?.temporalGranularity || "");
  const [spatialGranularity, setSpatialGranularity] = useState<string>(initialData?.spatialGranularity || "");
  const [includesDestination, setIncludesDestination] = useState<boolean>(initialData?.includesDestination || false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onDataChange) {
      onDataChange({
        temporalGranularity,
        spatialGranularity,
        includesDestination
      });
    }
    
    onNext();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
          Upload Your Historical Data (CSV)
        </Label>
        <FileUploader
          onFileChange={setSelectedFile}
          accept=".csv"
        />
      </div>
      
      <div>
        <Label htmlFor="temporal-granularity" className="block text-sm font-medium text-gray-700">
          What is the minimum temporal granularity of the data?
        </Label>
        <Select value={temporalGranularity} onValueChange={setTemporalGranularity}>
          <SelectTrigger id="temporal-granularity" className="mt-1 w-full">
            <SelectValue placeholder="Select granularity..." />
          </SelectTrigger>
          <SelectContent>
            {temporalOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="spatial-granularity" className="block text-sm font-medium text-gray-700">
          What is the spatial granularity of the data?
        </Label>
        <Select value={spatialGranularity} onValueChange={setSpatialGranularity}>
          <SelectTrigger id="spatial-granularity" className="mt-1 w-full">
            <SelectValue placeholder="Select granularity..." />
          </SelectTrigger>
          <SelectContent>
            {spatialOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Label htmlFor="includes-destination" className="text-sm font-medium text-gray-700">
            Does the dataset include a known destination?
          </Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-[200px] text-xs">Select 'No' for origin-only models (e.g. delivery).</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Switch 
          id="includes-destination" 
          checked={includesDestination} 
          onCheckedChange={setIncludesDestination} 
        />
      </div>
      
      <LoadingButton 
        type="submit" 
        fullWidth
      >
        Next
      </LoadingButton>
    </form>
  );
};

export default UploadForm;
