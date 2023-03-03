import React from "react";
import { createRoot } from "react-dom/client";
import ServerInfo from "./components/ServerInfo.jsx";
import SelectMvp from "./components/SelectMvp.jsx";
import Timer from "./components/Timer.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <header>
      <ServerInfo />
      <SelectMvp />
    </header>

    <main>
      <Timer time={300} />
    </main>
    <footer>Este es el footer</footer>
  </>
);
