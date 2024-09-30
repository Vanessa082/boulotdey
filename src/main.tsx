import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppContextProvider } from "./providers/context/app-context/app-context";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <Toaster richColors position="top-center"/>
      <App />
    </AppContextProvider>
  </StrictMode>
);
