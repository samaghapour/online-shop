import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetProducts } from "../../redux/actions";
import ProductCard from "../../components/common/productCard";
import "./products.css";

function Products() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const products = useSelector((state) => state.Products);
  const isLoading = useSelector((state) => state.IsLoading);

  useEffect(() => {
    dispatch(GetProducts(slug));
  }, [slug]);

  return (
    <div className="slug-products__container">
      {isLoading && (
        <div className="loading__container">
          <LoadingOutlined spin={true} style={{ fontSize: "25px" }} />
        </div>
      )}
      {products &&
        !isLoading &&
        products.length > 0 &&
        products.map((product) => {
          return (
            <ProductCard fromCategory={true} data={product} key={product.id} />
          );
        })}
    </div>
  );
}

export default Products;
