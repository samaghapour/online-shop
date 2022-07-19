import React from "react";

function CommentBox({
  name = "Anonymous",
  title = "",
  date = new Date().getFullYear(),
  location,
  comment = "",
  helpful = 0,
}) {
  return (
    <div className="comment-box">
      <div className="comment-box-row-1">
        <img
          src="/images/defaultProfile.jfif"
          alt={name}
          className="comment-box-user-profile"
        />
        <span className="comment-box-username">{name}</span>
      </div>

      <div className="comment-box-row-2">
        <span className="comment-box-user-title ellipsis">{title}</span>
      </div>

      <div className="comment-box-row-3">
        <span className="comment-box-date-location">
          Reviewed in the {location} on {date}
        </span>
      </div>

      <div className="comment-box-row-4">
        <p className="comment-box-user-comment">{comment}</p>
      </div>

      {helpful > 0 && (
        <div className="comment-box-row-5">
          <span className="comment-box-user-helpful-number">
            {helpful} people found this helpful
          </span>
        </div>
      )}

      <div className="comment-box-row-6">
        <button className="comment-box-helpful-btn">helpful</button>

        <span className="text-separator">|</span>

        <button className="comment-box-report-btn">Report abuse</button>
      </div>
    </div>
  );
}

export default CommentBox;
