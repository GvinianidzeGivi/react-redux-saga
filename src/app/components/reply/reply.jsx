import { useState } from "react";

const ReplyComponent = () => {
  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setComment("");
  };

  return (
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
  );
};

export default ReplyComponent;
