import React from "react";

import { AppRoutes } from "./app.routes";
import { Background } from "../components/Background";

import { useAuth } from "../hooks/auth";
import { SignIn } from "../screens/SignIn";

export function Routes() {
  const { user } = useAuth();

  return <Background>{user.id ? <AppRoutes /> : <SignIn />}</Background>;
}
