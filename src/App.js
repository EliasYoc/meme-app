import { Toaster } from "react-hot-toast";
import "./App.css";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />

      <Main />
      <Aside />
      <Header />
    </div>
  );
}

export default App;
