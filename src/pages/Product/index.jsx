import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetProductDetails } from "../../redux/actions";
import AddToCartContainer from "./components/addToCartContainer";
import DescriptionContainer from "./components/descriptionContainer";
import ImagesContainer from "./components/imagesContainer";
import "./product.css";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.ProductDetails);
  const isLoading = useSelector((state) => state.IsLoading);

  console.log(details);

  useEffect(() => {
    dispatch(GetProductDetails(id));
  }, [id]);

  return (
    <div className="product-details__container">
      {isLoading ? (
        <div className="loading__container">
          <LoadingOutlined spin={true} style={{ fontSize: "25px" }} />
        </div>
      ) : (
        <>
          <div className="title-details__container">
            {details && (
              <>
                <ImagesContainer data={details.assets} />
                <DescriptionContainer data={details} />
                <AddToCartContainer data={details} />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
