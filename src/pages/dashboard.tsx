import { useAuth } from "@/hooks/use-auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, Mail, User, Shield, ExternalLink } from "lucide-react";

export const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 border border-gray-700 rounded-lg transform rotate-45 opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-gray-700 rounded-lg transform -rotate-45 opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-gray-700 rounded-lg transform rotate-12 opacity-50"></div>
      </div>
      <div className="container mx-auto max-w-3xl relative z-10">
        <Card className="bg-gray-900/90 border border-gray-800 rounded-xl shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl" />
          <CardHeader className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-semibold text-white">
                  Dashboard
                </CardTitle>
                <CardDescription className="text-gray-400 mt-1">
                  Welcome to your personalized account dashboard
                </CardDescription>
              </div>
              <Button
                onClick={() => logout()}
                className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200 flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 relative z-10">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-lg mb-5 text-white flex items-center">
                <User className="mr-2 text-blue-400 h-5 w-5" />
                Account Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all">
                  <Mail className="mr-4 text-blue-400 h-5 w-5" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">{user?.email}</p>
                  </div>
                </div>

                <div className="flex items-center p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all">
                  <User className="mr-4 text-blue-400 h-5 w-5" />
                  <div>
                    <p className="text-sm text-gray-400">User ID</p>
                    <p className="text-white font-medium overflow-auto break-all">
                      {user?.uid}
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all">
                  <Shield className="mr-4 text-blue-400 h-5 w-5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Email Verified</p>
                    <p className="text-white font-medium">
                      {user?.emailVerified ? (
                        <span className="text-green-400 flex items-center">
                          Verified
                        </span>
                      ) : (
                        <span className="text-yellow-400 flex items-center">
                          Not verified
                        </span>
                      )}
                    </p>
                  </div>
                  {!user?.emailVerified && (
                    <Button
                      size="sm"
                      className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition-all"
                    >
                      Verify Now
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 flex items-center">
              <div className="flex-1">
                <h4 className="font-medium text-white">Need help?</h4>
                <p className="text-sm text-gray-400">
                  Visit our support center
                </p>
              </div>
              <Button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
