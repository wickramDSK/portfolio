import { useState } from "react";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Context from "./components/Context";
import Footer from "./components/Footer";
import "./Styles.css";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  return (
    <div className="parent">
      <Header />
      <div className="main-content">
        <SidePanel setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <Context currentPage={currentPage} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
