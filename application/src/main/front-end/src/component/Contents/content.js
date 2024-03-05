import React from "react";

import Main from "../Contents/Main/main.js"
import Club from "../Contents/Club/club.js"
import Schedule from "./Calendar/schedule.js";
import Join from "./Join/join.js";

function Content( {activeMainContent} ) {
  return (
    <div className="max-w-screen-lg container mx-auto bg-white">
      {activeMainContent === 'Main' && <Main />}
      {activeMainContent === 'Club' && <Club />}
      {activeMainContent === 'Join' && <Join />}
      {activeMainContent === 'Calendar' && <Schedule />}
    </div>
  );
}

export default Content;
