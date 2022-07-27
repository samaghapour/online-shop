import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/common/productCard";
import "./products.css";
import { getProducts } from "../../features/products/action";

function Products() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const products = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(getProducts(slug));
  }, [slug]);

  return (
    <div className="slug-products__container">
      {(products.loading || products.error) && (
        <div className="loading__container">
          {products.error ? (
            <p>someting went wrong!</p>
          ) : (
            <LoadingOutlined spin={true} style={{ fontSize: "25px" }} />
          )}
        </div>
      )}
      {products.value &&
        products.value.length > 0 &&
        !products.loading &&
        !products.error &&
        products.value.map((product) => {
          return (
            <ProductCard data={product} key={product.id} fromCategory={true} />
          );
        })}
    </div>
  );
}

export default Products;
