
import React, { ReactNode } from 'react';
import Stepper from './Stepper';

interface FormContainerProps {
  title: string;
  subtitle?: string;
  currentStep: number;
  children: ReactNode;
}

const steps = [
  { id: 1, label: 'Upload your data' },
  { id: 2, label: 'Context' },
  { id: 3, label: 'Goal' },
  { id: 4, label: 'Summary' },
];

const FormContainer: React.FC<FormContainerProps> = ({ 
  title, 
  subtitle, 
  currentStep, 
  children 
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>
      
      {subtitle && (
        <p className="text-sm text-gray-600 text-center mb-6 max-w-md mx-auto">
          {subtitle}
        </p>
      )}
      
      <Stepper currentStep={currentStep} steps={steps} />
      
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
