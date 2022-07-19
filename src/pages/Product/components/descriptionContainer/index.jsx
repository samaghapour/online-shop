import { StarOutlined } from "@ant-design/icons";
import React from "react";

function DescriptionContainer({ data }) {
  return (
    <div className="description__container">
      {data && (
        <>
          <div>
            <h3>{data.name}</h3>
            <div className="stars">
              <StarOutlined style={{ color: "gold" }} />
              <StarOutlined style={{ color: "gold" }} />
              <StarOutlined style={{ color: "gold" }} />
              <StarOutlined style={{ color: "gold" }} />
              <StarOutlined />
              <span>
                {Math.floor(Math.random() * 800)}/
                {Math.floor(Math.random() * 1000)}
              </span>
            </div>
          </div>

          <div>
            <div className="price__container">
              <span>Price: </span>
              <span className="price">
                {data?.price?.formatted_with_symbol}
              </span>
            </div>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(DescriptionContainer);
