import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./reset.css";
import Fallback from "./components/Fallback";
import Router from "./Router";
import { darkTheme } from "./theme.config";
import { ThemeProvider } from "@mui/material/styles";
import { ProvidePokedex } from "./hooks/usePokedex";
import { ProvideFavorites } from "./hooks/useFavorites";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <ProvidePokedex>
      <ProvideFavorites>
        <Suspense fallback={<Fallback />}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Suspense>
      </ProvideFavorites>
    </ProvidePokedex>
  </ThemeProvider>
);
