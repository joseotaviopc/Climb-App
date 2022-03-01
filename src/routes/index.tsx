import React from "react";

import { AuthRoutes } from "./auth.routes";
import { Background } from "../components/Background";

export function Routes() {
  return (
    <Background>
      <AuthRoutes />
    </Background>
  );
}
