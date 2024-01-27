import React, { useState } from "react";

import Header from "./component/Header/header.js";
import Footer from "./component/Footer/footer.js";

import Main from "./component/Contents/Main/main.js"
import Club from "./component/Contents/Club/club.js"

function App() {
  const [activeMainContent, setActiveMainContent] = useState('Main');

  return (
    <div className="max-w-400 container mx-auto bg-white">
      <Header setActiveMainContent={setActiveMainContent} /> {/* Header 컴포넌트 */}
      {activeMainContent === 'Main' && <Main />}
      {activeMainContent === 'Club' && <Club />}
      {/* {activeMainContent === 'Location' && <Location />}
      {activeMainContent === 'Event' && <Event />} */}
      
      <Footer/> {/* Footer 컴포넌트 */}
    </div>
  );
}

export default App;
