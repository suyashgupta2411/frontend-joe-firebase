import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { ArrowRight, Lock, Shield, UserCheck, Workflow } from "lucide-react";

export const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 border border-gray-700 rounded-lg transform rotate-45 opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-gray-700 rounded-lg transform -rotate-45 opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-gray-700 rounded-lg transform rotate-12 opacity-50"></div>
      </div>

      <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <h1 className="text-2xl font-bold text-white">Auth App</h1>
        <div className="flex space-x-4">
          <Button
            variant="link"
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Button>
          <Button
            variant="link"
            onClick={() => navigate("/login")}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Login
          </Button>
          <Button
            variant="link"
            onClick={() => navigate("/register")}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Register
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 flex-1 flex flex-col justify-center items-center relative z-10">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Auth App
          </h1>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            A secure authentication application with modern design, built with
            Firebase and shadcn/ui components.
          </p>

          {isAuthenticated ? (
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
              <Button
                onClick={() => navigate("/dashboard")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => navigate("/login")}
                className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
              >
                Register
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          <div className="mt-24 bg-gray-900/90 border border-gray-800 p-8 rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl" />
            <h2 className="text-2xl font-semibold mb-8 text-white relative z-10">
              Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
              <div className="flex items-start p-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all">
                <UserCheck className="mr-4 text-blue-400 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    User Registration
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Create an account with email and password
                  </p>
                </div>
              </div>

              <div className="flex items-start p-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all">
                <Lock className="mr-4 text-blue-400 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Authentication
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Secure login with Firebase authentication
                  </p>
                </div>
              </div>

              <div className="flex items-start p-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all">
                <Shield className="mr-4 text-blue-400 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Protected Routes
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Secure areas for authenticated users only
                  </p>
                </div>
              </div>

              <div className="flex items-start p-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all">
                <Workflow className="mr-4 text-blue-400 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Modern UI</h3>
                  <p className="text-gray-400 text-sm">
                    Beautiful interface with a modern design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-4 text-gray-500 text-sm relative z-10">
        © 2025 Auth App. All rights reserved.
      </footer>
    </div>
  );
};
