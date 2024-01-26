import React from "react";

function Category() {
    return(
        <div className="flex justify-center space-x-4 mb-1">
          <div className="px-3 py-2 border border-black rounded-xl">ALL</div>
          <div className="px-3 py-2 border border-black rounded-xl">공연</div>
          <div className="px-3 py-2 border border-black rounded-xl">체육</div>
          <div className="px-3 py-2 border border-black rounded-xl">취미</div>
          <div className="px-3 py-2 border border-black rounded-xl">학술</div>
        </div>
    )
}

export default Category;