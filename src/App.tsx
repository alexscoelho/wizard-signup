import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SignupFlow } from "./components/SignupFlow";

function App() {
  const [count, setCount] = useState(0);

  return <SignupFlow />;
}

export default App;
