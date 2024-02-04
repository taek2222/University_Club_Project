import React from "react"

function HeaderRecycle({ onClick, imageSrc, altText, label, scale }) {
    return(
        <div onClick={onClick} className="flex flex-col items-center">
        <div className={`rounded-full p-[2px] mb-1 bg-gradient-to-r from-story-start via-story-middle to-story-end transform transition-transform hover:scale-110 hover:cursor-pointer ${scale}`}>
          <div className="rounded-full bg-white w-11 h-11 overflow-hidden flex justify-center items-center">
            <img
              src={imageSrc}
              alt={altText}
              className="w-7 h-7 object-cover"
            />
          </div>
        </div>
        <span className="text-medium font-bold">{label}</span>
      </div> 
    )
}

export default HeaderRecycle;