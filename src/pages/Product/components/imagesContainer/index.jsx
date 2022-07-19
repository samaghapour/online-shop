import React, { useState, memo } from "react";

function ImagesContainer({ data }) {
  const [mainImage, setMainImage] = useState(data[0]);

  const changeMainImage = (image) => {
    setMainImage(image);
  };
  return (
    <div className="images__container">
      <div className="small-images__container">
        {data &&
          data.length > 0 &&
          data.map((image) => {
            return (
              <img
                onClick={() => changeMainImage(image)}
                src={image.url}
                alt={image.filename}
                key={image.id}
                className={mainImage.id === image.id ? "selected" : undefined}
              />
            );
          })}
      </div>
      <img
        src={mainImage?.url}
        alt={mainImage.filename}
        className="main-image"
      />
    </div>
  );
}

export default memo(ImagesContainer);
