import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadApi from "../../helpers/loadApi";
import actions from "../../store/posts/actions";

const PostsComponent = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(({ posts }) => posts);

  useEffect(() => {
    dispatch(actions.getPosts());
  }, [dispatch]);

  return (
    <LoadApi
      load={loading}
      render={() =>
        posts?.map((post) => (
          <div className="card" key={post.id}>
            {post.username}
          </div>
        ))
      }
    />
  );
};

export default PostsComponent;
