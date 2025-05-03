import { Navigate } from "react-router-dom";
import { LoginForm } from "@/components/auth/login-form";
import { useAuth } from "@/hooks/use-auth";

export const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 border border-gray-700 rounded-lg transform rotate-45 opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-gray-700 rounded-lg transform -rotate-45 opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-gray-700 rounded-lg transform rotate-12 opacity-50"></div>
      </div>
      <div className="w-full max-w-md relative z-10">
        <LoginForm />
      </div>
    </div>
  );
};
