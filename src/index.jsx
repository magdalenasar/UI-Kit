import { createRoot } from "react-dom/client";
import Link from "./Link";

function App() {
  return (
    <>
      <Link href="https://react-tutorial.app">Shop online</Link>
    </>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
