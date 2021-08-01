import "./App.css";
import AppLayout from "./Layouts/AppLayout";
import Home from "./Pages/Home";
import FAQLayout from "./Layouts/FAQLayout";
import { GroupImg, WomanImg } from "./assets/img/img";
import { Data } from "./Data/Data";
import Accordion from "./Components/Accordion";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <FAQLayout>
          <img src={GroupImg} alt="img" className="img_faq" />
          <div className="faq_main">
            <div className="faq_content">
              <img src={WomanImg} alt="img" className="womanImg" />
              <Accordion />
            </div>
          </div>
        </FAQLayout>
      </AppLayout>
    </div>
  );
}

export default App;
