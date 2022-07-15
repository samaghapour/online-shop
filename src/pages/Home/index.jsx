import React, { useEffect } from "react";
import { GetAllProducts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/common/productCard/index";
import "./home.css";
import { LoadingOutlined } from "@ant-design/icons";

function Home() {
  const products = useSelector((state) => state.AllProducts);
  const isLoading = useSelector((state) => state.IsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProducts());
  }, []);

  return (
    <div className="home__container">
      <h3>Daily Products</h3>
      <div className="products__container">
        {isLoading && (
          <div className="loading__container">
            <LoadingOutlined spin={true} style={{ fontSize: "25px" }} />
          </div>
        )}
        {products &&
          !isLoading &&
          products.length > 0 &&
          products.map((product) => {
            return <ProductCard data={product} key={product.id} />;
          })}
      </div>
    </div>
  );
}

export default Home;
