import React, { useState } from "react";

import Header from "./component/Header/header.js";
import Footer from "./component/Footer/footer.js";

import Content from "./component/Contents/content.js";

function App() {
  const [activeMainContent, setActiveMainContent] = useState('Main');

  return (
    <div className="w-full container mx-auto bg-white">
      <Header setActiveMainContent={setActiveMainContent} /> {/* Header 컴포넌트 */}
      <Content activeMainContent={activeMainContent} />      
      <Footer/> {/* Footer 컴포넌트 */}
    </div>
  );
}

export default App;
