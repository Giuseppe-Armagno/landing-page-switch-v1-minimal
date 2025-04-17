
import React from 'react';
import LoadingButton from "@/components/LoadingButton";

interface SummaryFormProps {
  onSubmit: () => void;
  formData: {
    temporalGranularity: string;
    spatialGranularity: string;
    includesDestination: boolean;
    selectedContexts: string[];
    service: string;
    output: string;
  };
}

const SummaryForm: React.FC<SummaryFormProps> = ({ onSubmit, formData }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Number of rows processed:</span>
            <span className="text-sm font-medium">1,245</span>
          </div>
          
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Number of columns:</span>
            <span className="text-sm font-medium">8</span>
          </div>
          
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Temporal granularity:</span>
            <span className="text-sm font-medium">{formData.temporalGranularity || "Not specified"}</span>
          </div>
          
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Spatial granularity:</span>
            <span className="text-sm font-medium">{formData.spatialGranularity || "Not specified"}</span>
          </div>
          
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Destination included:</span>
            <span className="text-sm font-medium">{formData.includesDestination ? "Yes" : "No"}</span>
          </div>
          
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">External variables:</span>
            <span className="text-sm font-medium">
              {formData.selectedContexts && formData.selectedContexts.length > 0 
                ? formData.selectedContexts.join(", ") 
                : "None"}
            </span>
          </div>
          
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Service:</span>
            <span className="text-sm font-medium">{formData.service || "Not specified"}</span>
          </div>
          
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Prediction output:</span>
            <span className="text-sm font-medium">{formData.output || "Not specified"}</span>
          </div>
        </div>
      </div>
      
      <LoadingButton
        type="submit"
        fullWidth
      >
        Submit & generate report
      </LoadingButton>
    </form>
  );
};

export default SummaryForm;
