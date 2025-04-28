import React, { useState } from 'react';
import Header from '@/components/Header';
import AnimatedFormContainer from '@/components/AnimatedFormContainer';
import UploadForm from '@/components/forms/UploadForm';
import ContextForm from '@/components/forms/ContextForm';
import GoalForm from '@/components/forms/GoalForm';
import ProcessingForm from '@/components/forms/ProcessingForm';
import SummaryForm from '@/components/forms/SummaryForm';
import SuccessScreen from '@/components/SuccessScreen';
import LoginForm from '@/components/forms/LoginForm';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    temporalGranularity: "15min",
    spatialGranularity: "coordinates",
    includesDestination: false,
    selectedContexts: ["Weather", "Holidays"],
    service: "Micromobility",
    output: "Origin demand"
  });
  
  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({
      ...prev,
      ...data
    }));
  };
  
  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };
  
  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };
  
  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    setCurrentStep(6);
  };
  
  const handleReset = () => {
    setCurrentStep(1);
  };
  
  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Free Accuracy Report For Urban Mobility",
          subtitle: "Upload your historical data and provide basic information to get a free accuracy report for your urban mobility service."
        };
      case 2:
        return {
          title: "Additional Context",
          subtitle: "Select external variables that could improve prediction accuracy."
        };
      case 3:
        return {
          title: "Model Objective",
          subtitle: "Tell us about your service and prediction needs."
        };
      case 4:
        return {
          title: "Sign In",
          subtitle: "Please sign in to continue with the process."
        };
      case 5:
        return {
          title: "Processing Your Data",
          subtitle: "Please wait while we analyze your dataset."
        };
      case 6:
        return {
          title: "Summary",
          subtitle: "Review your data and generate the report."
        };
      case 7:
        return {
          title: "Success",
          subtitle: "Your report has been generated successfully."
        };
      default:
        return {
          title: "Free Accuracy Report For Urban Mobility",
          subtitle: ""
        };
    }
  };
  
  const { title, subtitle } = getStepContent();
  
  return (
    <div className="min-h-screen bg-brand flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 pt-32">
        <AnimatedFormContainer title={title} subtitle={subtitle} currentStep={currentStep}>
          {currentStep === 1 && (
            <UploadForm 
              onNext={handleNextStep} 
              onDataChange={(data) => updateFormData(data)}
              initialData={{
                temporalGranularity: formData.temporalGranularity,
                spatialGranularity: formData.spatialGranularity,
                includesDestination: formData.includesDestination
              }}
            />
          )}
          
          {currentStep === 2 && (
            <ContextForm onNext={handleNextStep} onBack={handlePrevStep} />
          )}
          
          {currentStep === 3 && (
            <GoalForm 
              onNext={handleNextStep} 
              onBack={handlePrevStep}
              onDataChange={(data) => updateFormData(data)}
              initialData={{
                service: formData.service,
                output: formData.output
              }}
            />
          )}
          
          {currentStep === 4 && (
            <LoginForm onNext={handleNextStep} onBack={handlePrevStep} />
          )}
          
          {currentStep === 5 && (
            <ProcessingForm onComplete={handleNextStep} />
          )}
          
          {currentStep === 6 && (
            <SummaryForm onSubmit={handleSubmit} formData={formData} />
          )}
          
          {currentStep === 7 && (
            <SuccessScreen onReset={handleReset} />
          )}
        </AnimatedFormContainer>
      </main>
    </div>
  );
};

export default Index;
