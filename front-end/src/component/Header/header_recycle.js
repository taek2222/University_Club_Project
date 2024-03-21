// REVIEWED: 2024-03-21 by [Oh Yeon Taek]
import React from "react"

function HeaderRecycle({ onClick, imageSrc, altText, label, scale }) {
    return(
        <div onClick={onClick} className="flex flex-col items-center">
          <div className={`rounded-full p-[2px] mb-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-pink-600 transform transition-transform hover:scale-110 hover:cursor-pointer ${scale}`}>
            <div className="rounded-full bg-white w-11 h-11 overflow-hidden flex justify-center items-center">
              <div className="flex w-[2.6rem] h-[2.6rem] border-2 rounded-full justify-center items-center">
                <img
                  src={imageSrc}
                  alt={altText}
                  className="w-7 h-7 object-cover"
                />
              </div>
            </div>
          </div>
          <span className="text-lg font-bold">{label}</span>
        </div> 
    )
}

export default HeaderRecycle;