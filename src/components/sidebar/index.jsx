import { CloseCircleOutlined, DownOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import "./sidebar.css";
import { toggleSidebar } from "../../utils/helpers";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../features/categories/action";

function dropdown(e) {
  const target = e.target;
  target.nextElementSibling.classList.toggle("show");
}

function Sidebar() {
  const { isAuthenticated, user } = useAuth0();
  const categories = useSelector((state) => state.Categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="sidebar__container">
      <div className="sidebar-list__container">
        <div className="sidebar__header">
          <span>
            Welcome, {isAuthenticated ? user.given_name : "Anonymous!"}
          </span>
        </div>
        {categories?.value &&
          categories.value.length > 0 &&
          categories.value.map((category) => {
            return (
              <div key={category.id} className="sidebar-list_item">
                <div onClick={dropdown} className="dropbtn">
                  <span>{category.name}</span>
                  <DownOutlined />
                </div>
                <ul className="dropdown-content">
                  {category?.children?.length > 0 &&
                    category.children.map((child) => {
                      return (
                        <Link to={`/${child.slug}`} key={child.id}>
                          {child.slug}
                        </Link>
                      );
                    })}
                </ul>
              </div>
            );
          })}
      </div>
      <button className="close-sidebar_btn" onClick={toggleSidebar}>
        <CloseCircleOutlined />
      </button>
    </div>
  );
}

export default React.memo(Sidebar);
