import { Toaster } from "react-hot-toast";
import "./App.css";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "animate.css";
function App() {
  return (
    <>
      <Header />

      <div className="App">
        <Toaster position="bottom-right" />

        <Main />
        <Aside />
      </div>
    </>
  );
}

export default App;
