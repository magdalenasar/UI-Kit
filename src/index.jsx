import { createRoot } from "react-dom/client";
import Link from "./Link";
import Button from "./Button";
import Container from './Container';
import Input from './Input';


function App() {
  return (
    <>
        <Container>
            { /* It doesn't matter what you write here. This is where you can use the components that you've defined. It's important, however, to import them in this file. */ }
            <Link href="https://react-tutorial.app">React Tutorial</Link>
            <Button disabled={true}>Login</Button>
            <Input placeholder="Full Name" name="full_name" />
        </Container>
    </>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
