import React from 'react';

const Card = ({ name, status, img, portrayed }) => {
  return (
    <div className="tc bg-light-yellow mid-gray dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <img src={img} alt="" width="200" height="300" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{status}</p>
        <p>{portrayed}</p>
      </div>
    </div>
  );
};

export default Card;
