import { Toaster } from "react-hot-toast";
import "./App.css";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "animate.css";
import Toolbar from "./components/Toolbar/Toolbar";
import { useSelector } from "react-redux";
import { selectSrcImage } from "./features/textSlice";
function App() {
  const srcImg = useSelector(selectSrcImage);
  return (
    <>
      <Header />

      <div className="App">
        <Toaster position="bottom-right" />

        <Main />
        <Aside />
        {srcImg && <Toolbar />}
      </div>
    </>
  );
}

export default App;
