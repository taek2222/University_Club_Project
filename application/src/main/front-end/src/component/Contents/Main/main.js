/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Main() {
    return(
        <main>
        <div className="flex justify-center space-x-3 mb-10">
          <button className="px-5 py-2 border border-black rounded">ALL</button>
          <button className="px-5 py-2">공연</button>
          <button className="px-5 py-2">체육</button>
          <button className="px-5 py-2">취미</button>
          <button className="px-5 py-2">학술</button>
        </div>
      </main>
    )
}

export default Main;