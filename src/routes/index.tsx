import React from "react";

import { AuthRoutes } from "./auth.routes";
import { Background } from "../components/Background";

import { useAuth } from "../hooks/auth";
import { SignIn } from "../screens/SignIn";

export function Routes() {
  const { user } = useAuth();

  return <Background>{user.id ? <AuthRoutes /> : <SignIn />}</Background>;
}
