import { useState } from "react";
import { useSelector } from "react-redux";
import CommentComponent from "./comment/comment";

const ReplyComponent = () => {
  const [comment, setComment] = useState("");
  const { selectedUser } = useSelector(({ posts }) => posts);

  const onSubmit = (e) => {
    e.preventDefault();
    setComment("");
  };

  return (
    <>
      {selectedUser && (
        <div className="d-flex flex-column justify-content-between  align-items-center h-100">
          <CommentComponent selectedUser={selectedUser} />
          <form className="d-flex" onSubmit={onSubmit}>
            <input
              className="w-100"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className="btn btn-dark">
              Reply
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ReplyComponent;
