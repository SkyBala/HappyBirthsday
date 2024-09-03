import HTMLFlipBook from "react-pageflip";
import "./App.css";
import Page from "./pages/page";
import Page1 from "./pages/page1";

import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";

function App() {
  return (
    <div className="App">
      <HTMLFlipBook width={430} height={932}>
        <div className="demoPage">
          <Page />
        </div>
        <div className="demoPage">
          <Page1 />
        </div>
        <div className="demoPage">
          <Page2 />
        </div>
        <div className="demoPage">
          <Page3 />
        </div>
        <div className="demoPage">
          <Page4 />
        </div>
        <div className="demoPage">
          <Page5 />
        </div>
        <div className="demoPage">
          <Page6 />
        </div>
      
      </HTMLFlipBook>
    </div>
  );
}

export default App;
