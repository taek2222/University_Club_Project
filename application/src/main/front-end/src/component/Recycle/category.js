import React from "react";

function Category() {
    return(
        <div className="flex justify-center space-x-7 mb-1">
          <div className="px-1 py-2 border border-black rounded-xl">ALL</div>
          <div className="px-1 py-2">공연</div>
          <div className="px-1 py-2">체육</div>
          <div className="px-1 py-2">취미</div>
          <div className="px-1 py-2">학술</div>
        </div>
    )
}

export default Category;