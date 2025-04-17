
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";

interface GoalFormProps {
  onNext: () => void;
  onBack: () => void;
  onDataChange?: (data: {
    service: string;
    output: string;
  }) => void;
  initialData?: {
    service: string;
    output: string;
  };
}

const serviceOptions = ["Micromobility", "Delivery", "Car Sharing", "Other"];
const outputOptions = ["Origin demand", "Origin-Destination matrix", "Pickup hotspots"];

const GoalForm: React.FC<GoalFormProps> = ({ 
  onNext, 
  onBack,
  onDataChange,
  initialData
}) => {
  const [service, setService] = useState<string>(initialData?.service || "");
  const [customService, setCustomService] = useState<string>("");
  const [output, setOutput] = useState<string>(initialData?.output || "");
  
  const handleServiceChange = (value: string) => {
    setService(value);
    if (value !== "Other") {
      setCustomService("");
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onDataChange) {
      onDataChange({
        service: service === "Other" ? customService : service,
        output
      });
    }
    
    onNext();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="service" className="text-sm font-medium text-gray-700">
          Which service are you modeling?
        </Label>
        <Select value={service} onValueChange={handleServiceChange}>
          <SelectTrigger id="service" className="w-full">
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {service === "Other" && (
          <div className="mt-2">
            <Label htmlFor="custom-service" className="sr-only">
              Specify service
            </Label>
            <Input
              id="custom-service"
              placeholder="Specify your service..."
              value={customService}
              onChange={(e) => setCustomService(e.target.value)}
            />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="output" className="text-sm font-medium text-gray-700">
          Preferred prediction output?
        </Label>
        <Select value={output} onValueChange={setOutput}>
          <SelectTrigger id="output" className="w-full">
            <SelectValue placeholder="Select output type..." />
          </SelectTrigger>
          <SelectContent>
            {outputOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex space-x-4">
        <LoadingButton
          type="button"
          onClick={onBack}
          variant="outline"
          className="flex-1"
        >
          Back
        </LoadingButton>
        <LoadingButton
          type="submit"
          className="flex-1"
        >
          Next
        </LoadingButton>
      </div>
    </form>
  );
};

export default GoalForm;
