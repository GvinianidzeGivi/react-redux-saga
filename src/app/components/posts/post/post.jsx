import { useDispatch } from "react-redux";

const PostComponent = (props) => {
  const { id, title, text, username, user_image } = props;

  return (
    <div className="post card my-3">
      <div className="d-flex align-items-center p-2">
        <div>
          <img className="post__user-image" src={user_image} alt={username} />
        </div>
        <div>
          <h6 className="post__title">{title}</h6>
          <p className="post__body">{text}</p>
          <span className="post__username">{username}</span>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
