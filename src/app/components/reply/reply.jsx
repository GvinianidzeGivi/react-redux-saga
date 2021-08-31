import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/posts/actions";
import CommentComponent from "./comment/comment";
import { v4 as uuidv4 } from "uuid";

const ReplyComponent = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const { selectedUser } = useSelector(({ posts }) => posts);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      actions.updatePost({
        comments: [
          ...selectedUser.comments,
          { id: uuidv4(), user: "Guest" + uuidv4(), text: comment },
        ],
        id: selectedUser.id,
      })
    );
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
