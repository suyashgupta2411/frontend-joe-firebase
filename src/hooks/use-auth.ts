import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser, logoutUser } from "../lib/firebase";
import { useAuthContext } from "../context/auth-context";

// Define a proper error type for Firebase errors

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const register = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await registerUser(email, password);
      navigate("/dashboard");
    } catch (err: unknown) {
      console.error("Registration error:", err);

      // Type-safe error handling
      if (err instanceof Error) {
        setError(err.message || "Failed to register");
      } else {
        setError("Failed to register");
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await loginUser(email, password);
      navigate("/dashboard");
    } catch (err: unknown) {
      console.error("Login error:", err);

      // Type-safe error handling
      if (err instanceof Error) {
        setError(err.message || "Failed to login");
      } else {
        setError("Failed to login");
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await logoutUser();
      navigate("/login");
    } catch (err: unknown) {
      console.error("Logout error:", err);

      // Type-safe error handling
      if (err instanceof Error) {
        setError(err.message || "Failed to logout");
      } else {
        setError("Failed to logout");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    user: currentUser,
    loading,
    error,
    register,
    login,
    logout,
    isAuthenticated: !!currentUser,
  };
};
