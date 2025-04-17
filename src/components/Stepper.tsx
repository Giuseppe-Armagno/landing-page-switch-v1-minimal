
import React from 'react';
import { cn } from "@/lib/utils";

interface StepperProps {
  currentStep: number;
  steps: {
    id: number;
    label: string;
  }[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;
          
          return (
            <div key={step.id} className="flex flex-col items-center relative w-full">
              {/* Connector Line */}
              {step.id !== 1 && (
                <div 
                  className={cn(
                    "absolute h-[2px] top-4 -left-1/2 w-full", 
                    isCompleted ? "bg-brand" : "bg-gray-300"
                  )}
                />
              )}
              
              {/* Step Circle */}
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 mb-2",
                  isActive || isCompleted ? "bg-brand" : "bg-gray-300",
                  "transition-colors duration-200"
                )}
              >
                <span className="text-sm font-medium text-white">{step.id}</span>
              </div>
              
              {/* Step Label */}
              <span 
                className={cn(
                  "text-xs text-center",
                  isActive || isCompleted ? "text-gray-800 font-medium" : "text-gray-500"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
