import React from "react"

function HeaderRecycle({ href, imageSrc, altText, label }) {
    return(
        <a href={href} className="flex flex-col items-center">
        <div className="rounded-full p-[2px] bg-gradient-to-r from-story-start via-story-middle to-story-end">
          <div className="rounded-full bg-white w-12 h-12 overflow-hidden">
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <span className="text-sm font-medium">{label}</span>
      </a> 
    )
}

export default HeaderRecycle;