import React from "react";

function ApplicationPaths({ icons, activeStates }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {icons.map((icon, index) => (
        <div key={index} className={`w-7 h-7 ${!activeStates[index] ? 'hidden' : ''}`}>
          <img src={icon} alt={`신청 경로 ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ApplicationPaths; 
