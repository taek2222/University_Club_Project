import React, { useState } from "react";
import {} from "./App.css"; 

import Header from "./component/Header/header.js";
import Footer from "./component/Footer/footer.js";

import Content from "./component/Contents/content.js";
import RouteChangeTracker from "./RouteChangeTracker.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [activeMainContent, setActiveMainContent] = useState('Main');

  return (
    <div className="w-full mx-auto bg-white">
      <BrowserRouter>
        <RouteChangeTracker />
      </BrowserRouter>
      <Header activeMainContent={activeMainContent} setActiveMainContent={setActiveMainContent} /> {/* Header 컴포넌트 */}
      <Content activeMainContent={activeMainContent} />      
      <Footer/> {/* Footer 컴포넌트 */}
    </div>
  );
}

export default App;
