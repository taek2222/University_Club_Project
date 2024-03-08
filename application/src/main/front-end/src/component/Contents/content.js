import React from "react";

import Main from "./Main/main.js"
import Club from "./Club/club.js"
import Delivery from "./Delivery/delivery.js"
import Join from "./Join/join.js"
import Schedule from "./Schedule/schedule.js"

function Content( {activeMainContent} ) {
  return (
    <div className="max-w-screen-lg container mx-auto bg-white">
      {activeMainContent === 'Main' && <Main />}
      {activeMainContent === 'Club' && <Club />}
      {activeMainContent === 'Delivery' && <Delivery />}
      {activeMainContent === 'Join' && <Join />}
      {activeMainContent === 'Calendar' && <Schedule />}
    </div>
  );
}

export default Content;
