
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import LoadingButton from "@/components/LoadingButton";

interface ContextFormProps {
  onNext: () => void;
  onBack: () => void;
  onDataChange?: (selectedContexts: string[]) => void;
  initialData?: string[];
}

const contextOptions = [
  { id: "weather", label: "Weather" },
  { id: "events", label: "Events" },
  { id: "holidays", label: "Holidays" },
  { id: "school-calendars", label: "School calendars" },
  { id: "none", label: "None" }
];

const ContextForm: React.FC<ContextFormProps> = ({ 
  onNext, 
  onBack,
  onDataChange,
  initialData = []
}) => {
  const [selectedContexts, setSelectedContexts] = useState<string[]>(initialData);
  const [extraColumns, setExtraColumns] = useState<string>("");
  
  const handleContextChange = (id: string, checked: boolean) => {
    if (id === "none" && checked) {
      // If "None" is selected, clear all other selections
      setSelectedContexts(["none"]);
    } else if (checked) {
      // If any other option is selected, remove "None" if it's selected
      const newSelectedContexts = selectedContexts.filter(c => c !== "none");
      setSelectedContexts([...newSelectedContexts, id]);
    } else {
      // If an option is deselected, simply remove it from the array
      setSelectedContexts(selectedContexts.filter(c => c !== id));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onDataChange) {
      onDataChange(selectedContexts);
    }
    
    onNext();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Label className="text-sm font-medium text-gray-700">
          Select external variables you'd like to include:
        </Label>
        
        <div className="space-y-3">
          {contextOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={option.id}
                checked={selectedContexts.includes(option.id)}
                onCheckedChange={(checked) => handleContextChange(option.id, checked === true)}
              />
              <Label
                htmlFor={option.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="extra-columns" className="text-sm font-medium text-gray-700">
          Describe any extra columns we could use (optional)
        </Label>
        <Textarea
          id="extra-columns"
          placeholder="Describe any additional data columns that might be useful..."
          value={extraColumns}
          onChange={(e) => setExtraColumns(e.target.value)}
          className="min-h-[100px]"
        />
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

export default ContextForm;
