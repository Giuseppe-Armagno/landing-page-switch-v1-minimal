
import React, { useEffect, useState } from 'react';

interface ProcessingFormProps {
  onComplete: () => void;
}

const ProcessingForm: React.FC<ProcessingFormProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  
  const steps = [
    { id: 1, label: "Uploading..." },
    { id: 2, label: "Preprocessing..." },
    { id: 3, label: "Almost there..." },
  ];
  
  useEffect(() => {
    // Simulate processing steps
    const timer1 = setTimeout(() => {
      setCurrentStep(2);
      setProgress(33);
    }, 2000);
    
    const timer2 = setTimeout(() => {
      setCurrentStep(3);
      setProgress(66);
    }, 4000);
    
    const timer3 = setTimeout(() => {
      setProgress(100);
      onComplete();
    }, 6000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);
  
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-md">
        <div className="flex justify-between mb-6">
          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <div key={step.id} className="flex flex-col items-center relative w-full">
                {/* Connector Line */}
                {step.id !== 1 && (
                  <div 
                    className={`absolute h-[2px] top-4 -left-1/2 w-full ${
                      isCompleted ? "bg-brand" : "bg-gray-300"
                    }`}
                  />
                )}
                
                {/* Step Circle */}
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center z-10 mb-2 ${
                    isActive ? "bg-brand" : isCompleted ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-sm font-medium text-white">{step.id}</span>
                  )}
                </div>
                
                {/* Step Label */}
                <span 
                  className={`text-xs ${
                    isActive ? "text-gray-900 font-medium" : isCompleted ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-brand h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-center text-sm text-gray-600">
          Please wait while we process your data...
        </p>
      </div>
    </div>
  );
};

export default ProcessingForm;
