
import React from 'react';
import { CheckCircle, Download } from 'lucide-react';
import LoadingButton from './LoadingButton';

interface SuccessScreenProps {
  onReset: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onReset }) => {
  return (
    <div className="text-center py-8 space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">Report Generated Successfully!</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Your urban mobility accuracy report has been generated and is ready for download.
          We've also sent a copy to your email for future reference.
        </p>
      </div>
      
      <div className="pt-4 space-y-4">
        <LoadingButton 
          fullWidth
          className="py-3"
        >
          <Download className="mr-2 h-4 w-4" /> Download Report
        </LoadingButton>
        
        <LoadingButton
          onClick={onReset}
          variant="outline"
          fullWidth
          className="py-3"
        >
          Submit Another Dataset
        </LoadingButton>
      </div>
    </div>
  );
};

export default SuccessScreen;
