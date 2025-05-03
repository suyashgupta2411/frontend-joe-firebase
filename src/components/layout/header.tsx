import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="border-b py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Auth App
        </Link>

        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/dashboard" className="hover:text-blue-600">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Button variant="outline" onClick={() => logout()}>
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Button variant="outline" onClick={() => navigate("/login")}>
                    Login
                  </Button>
                </li>
                <li>
                  <Button onClick={() => navigate("/register")}>
                    Register
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
