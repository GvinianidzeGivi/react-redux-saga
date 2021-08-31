const PostComponent = (props) => {
  const { id, title, text, username, user_image, selectPostId } = props;

  return (
    <div className="post card " onClick={() => selectPostId(id)}>
      <div className="d-flex align-items-center m-auto">
        <img
          className="post__user-image rounded-circle my-3"
          src={user_image}
          alt={username}
        />
        <h6 className="post__title text-center w-100 ps-3">{title}</h6>
      </div>
      <p className="post__body text-center">{text}</p>
      <span className="post__username ms-auto pb-2 pe-2">{username}</span>
    </div>
  );
};

export default PostComponent;
