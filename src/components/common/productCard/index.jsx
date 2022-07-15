import { StarOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./productCard.css";

function ProductCard({ data, fromCategory }) {
  const { slug } = useParams();
  const productLink = fromCategory
    ? `/${slug}/${data.id}`
    : `/${data.categories[data.categories.length - 1].slug}/${data.id}`;
  console.log(data);
  return (
    <div className="product-card__container">
      <img
        className="product-card-image"
        src={data?.image?.url}
        alt={data?.name}
      />
      <div className="product-card-content">
        <Link to={productLink} className="product-card-name">
          {data?.name}
        </Link>
        <div className="product-card-stars">
          <StarOutlined style={{ color: "gold" }} />
          <StarOutlined style={{ color: "gold" }} />
          <StarOutlined style={{ color: "gold" }} />
          <StarOutlined style={{ color: "gold" }} />
          <StarOutlined />
          <span>
            {Math.floor(Math.random() * 800)}/{Math.floor(Math.random() * 1000)}
          </span>
        </div>
        <span className="product-card-price">
          {data?.price?.formatted_with_symbol}
        </span>
      </div>
    </div>
  );
}

export default React.memo(ProductCard);
