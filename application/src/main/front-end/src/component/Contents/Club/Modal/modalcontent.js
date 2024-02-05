import React from 'react';

const ModalContents = ({ clubName, imageUrl, tags }) => {
  return (
    <>
      <img src={imageUrl} alt={clubName} className="w-full max-w-xs mx-auto mt-4" />
      <h2 className="text-lg font-bold text-center mt-4">{clubName}</h2>
      <p className="text-sm text-center mt-2">
        {clubName}에 대한 자세한 정보...
      </p>
      <div className="mt-4 text-center">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
        ))}
      </div>
    </>
  );
};

export default ModalContents;