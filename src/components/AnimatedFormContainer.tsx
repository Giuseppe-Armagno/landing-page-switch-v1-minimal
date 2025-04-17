
import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Stepper from './Stepper';

interface AnimatedFormContainerProps {
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

const AnimatedFormContainer: React.FC<AnimatedFormContainerProps> = ({ 
  title, 
  subtitle, 
  currentStep, 
  children 
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <motion.h1 
        className="text-2xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h1>
      
      {subtitle && (
        <motion.p 
          className="text-sm text-gray-600 text-center mb-6 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      {currentStep <= 5 && (
        <Stepper currentStep={currentStep > 4 ? 4 : currentStep} steps={steps} />
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedFormContainer;
