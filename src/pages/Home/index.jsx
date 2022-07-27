import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/common/productCard/index";
import "./home.css";
import { LoadingOutlined } from "@ant-design/icons";
import { getAllProducts } from "../../features/allProducts/action";

function Home() {
  const products = useSelector((state) => state.AllProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="home__container">
      <h3>Daily Products</h3>
      <div className="products__container">
        {products.loading && (
          <div className="loading__container">
            <LoadingOutlined spin={true} style={{ fontSize: "25px" }} />
          </div>
        )}
        {products.error && !products.loading && (
          <div className="loading__container">
            <p>something went wrong!</p>
          </div>
        )}
        {products.value &&
          !products.loading &&
          !products.error &&
          products.value.length > 0 &&
          products.value.map((product) => {
            return <ProductCard data={product} key={product.id} />;
          })}
      </div>
    </div>
  );
}

export default Home;
