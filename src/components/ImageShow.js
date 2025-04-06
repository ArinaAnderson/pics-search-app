import React, { useState } from "react";

const ImageShow = ({ alt_description, urls, description}) => {
  return (
    <li className="image-list__item">
      <div className="image-list__img-box">
        <img
          src={urls.small}
          alt={alt_description}
        />
      </div>
      <span>
        {description ? description : alt_description}
      </span>
    </li>
  );
}

export default ImageShow;
