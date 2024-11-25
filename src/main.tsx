import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./providers/login.context.tsx";
import { PedidosProvider } from "./providers/pedidos.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
        <LoginProvider>
      <PedidosProvider>
          <App />
      </PedidosProvider>
        </LoginProvider>
    </BrowserRouter>
  </StrictMode>
);
