export interface UserCredentials {
  email: string;
  password: string;
}

export interface AuthFormData extends UserCredentials {
  confirmPassword?: string;
}

export interface NavItem {
  label: string;
  path: string;
  requiresAuth: boolean;
}

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  protected?: boolean;
}
