
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";
import { Google } from "lucide-react";

interface LoginFormProps {
  onNext: () => void;
  onBack: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onNext, onBack }) => {
  const handleGoogleLogin = () => {
    // To be implemented with auth provider
    console.log("Google login clicked");
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold">Welcome back</CardTitle>
        <CardDescription>
          Sign in to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button
          variant="outline"
          className="w-full py-6"
          onClick={handleGoogleLogin}
        >
          <Google className="mr-2" />
          Continue with Google
        </Button>
        
        <div className="flex space-x-4 mt-4">
          <LoadingButton
            type="button"
            onClick={onBack}
            variant="outline"
            className="flex-1"
          >
            Back
          </LoadingButton>
          <LoadingButton
            type="button"
            onClick={onNext}
            className="flex-1"
          >
            Next
          </LoadingButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
