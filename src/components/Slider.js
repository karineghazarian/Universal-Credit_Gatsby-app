import React from "react";

const Slider = ({data}) =>
{
  console.log("slider", data);
  return (
    <div>
      Slider
      {data?.map(imgData => (
          <div key={imgData.cover.id}>
            <img src={imgData.cover.publicURL} alt={imgData.caption}/>
            <h4>{imgData.caption}</h4>
          </div>
      ))}
    </div>
  );
};

export default Slider;