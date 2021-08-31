const CommentComponent = ({ selectedUser }) => {
  return (
    <div>
      {selectedUser?.comments?.length > 0 ? (
        selectedUser.comments.map((comment) => (
          <div className="card" key={comment.id}>
            <h6>{comment.user}</h6>
            <h3>{comment.text}</h3>
          </div>
        ))
      ) : (
        <span>No Post Yes</span>
      )}
    </div>
  );
};

export default CommentComponent;
