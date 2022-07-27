import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddToCartContainer from "./components/addToCartContainer";
import DescriptionContainer from "./components/descriptionContainer";
import ImagesContainer from "./components/imagesContainer";
import "./product.css";
import InformationTable from "./components/informationTable";
import StarProgressBars from "./components/review/StarProgressBars";
import CommentBox from "./components/review/CommentBox";
import { getProductDetails } from "../../features/productDetails/action";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.ProductDetails);

  const variants =
    details.value &&
    details.value.variant_groups.map((item) => {
      return { id: item.id, th: item.name, options: item.options };
    });

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id]);

  const commentData = useMemo(() => {
    return [
      {
        name: "Sam Aghapour",
        title: "it works very well, it took me few hours to handle it",
        date: "October 5, 2021",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nisi fugit error eaque beatae, id omnis quas ducimus consectetur modi nam nesciunt? Veniam officiis vel itaque! Labore ut perspiciatis, atque amet hic distinctio, beatae ullam natus laudantium delectus soluta cum quia, quasi tempora sunt quas quam consectetur? Omnis, assumenda ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nisi fugit error eaque beatae, id omnis quas ducimus consectetur modi nam nesciunt? Veniam officiis vel itaque! Labore ut perspiciatis, atque amet hic distinctio, beatae ullam natus laudantium delectus soluta cum quia, quasi tempora sunt quas quam consectetur? Omnis, assumenda ullam.",
        location: "USA",
        helpful: 19,
      },
      {
        name: "john doe",
        title: "Cool",
        data: "May 6, 2021",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nisi fugit error eaque beatae, id omnis quas ducimus consectetur modi nam nesciunt? Veniam officiis vel itaque!",
        location: "USA",
        helpful: 38,
      },
      {
        name: "sara felani",
        title: "it's broken 120 days later...",
        data: "May 26, 2021",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nisi fugit error eaque beatae, id omnis quas ducimus consectetur modi nam nesciunt? Veniam officiis vel itaque!",
        location: "USA",
        helpful: 90,
      },
      {
        name: "natasha badass",
        title: "not bad , i need to spend more time with it to see how is it ",
        data: "May 28, 2021",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nisi fugit error eaque beatae, id omnis quas ducimus consectetur modi nam nesciunt? Veniam officiis vel itaque!",
        location: "USA",
        helpful: 2,
      },
      {
        name: "tom jerryzadeh",
        title: "i can't open it's box",
        data: "May 30, 2021",
        comment: "heyyy, i can't open it's box what the hell???.",
        location: "USA",
        helpful: 0,
      },
    ];
  }, []);

  return (
    <div className="product-details__container">
      {details.loading ? (
        <div className="loading__container">
          <LoadingOutlined spin={true} style={{ fontSize: "25px" }} />
        </div>
      ) : (
        <>
          <div className="title-details__container">
            {details.value && (
              <>
                <ImagesContainer data={details.value.assets} />
                <DescriptionContainer data={details.value} />
                <AddToCartContainer data={details.value} />
              </>
            )}
          </div>
          <div className="information-table__container">
            <span className="product-details-title">Product Information</span>
            <InformationTable data={variants} />
          </div>
          <div className="product-description">
            <span className="product-details-title">Product Description</span>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: details.value?.description }}
            />
          </div>
          <div className="reviews__container">
            <span className="product-details-title">Customer reviews</span>
            <div>
              <StarProgressBars />
              <div className="comments__container">
                {commentData &&
                  commentData.length > 0 &&
                  commentData.map((comment) => {
                    return (
                      <CommentBox
                        name={comment.name}
                        title={comment.title}
                        date={comment.date}
                        comment={comment.comment}
                        location={comment.location}
                        helpful={comment.helpful}
                        key={comment.comment + comment.name}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
