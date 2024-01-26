import React from "react";

function Category() {
    return(
        <div className="flex justify-center mb-10">
          <div className="px-5 py-5 border border-black rounded">ALL</div>
          <div className="px-5 py-5">공연</div>
          <div className="px-5 py-5">체육</div>
          <div className="px-5 py-5">취미</div>
          <div className="px-5 py-5">학술</div>
        </div>
    )
}

export default Category;