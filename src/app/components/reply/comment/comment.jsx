const CommentComponent = ({ selectedUser }) => {
  return (
    <div>
      {selectedUser?.comments?.length > 0 ? (
        selectedUser.comments.map((comment) => <h3>{comment.title}</h3>)
      ) : (
        <span>No Post Yes</span>
      )}
    </div>
  );
};

export default CommentComponent;
