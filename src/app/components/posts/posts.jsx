import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadApi from "../../helpers/loadApi";
import actions from "../../store/posts/actions";
import PostComponent from "./post/post";

const PostsComponent = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(({ posts }) => posts);

  const selectPostId = (postId) => {
    dispatch(actions.clearPost());
    dispatch(actions.getPost(postId));
  };

  useEffect(() => {
    dispatch(actions.getPosts());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column">
      <LoadApi
        load={loading}
        render={() =>
          posts?.map((post) => (
            <PostComponent
              key={post.id}
              selectPostId={selectPostId}
              {...post}
            />
          ))
        }
      />
    </div>
  );
};

export default PostsComponent;
