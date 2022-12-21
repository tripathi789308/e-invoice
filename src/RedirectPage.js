import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function RedirectPage() {
  return (
    <Navigate to="/dashboard" />
  );
}
