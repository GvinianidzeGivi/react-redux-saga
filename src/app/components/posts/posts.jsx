import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Load from "../../helpers/load";
import actions from "../../store/posts/actions";

const PostsComponent = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(({ posts }) => posts.data);

  // console.info(loading);

  // useEffect(() => {
  //   dispatch(actions.getPosts());
  // }, [dispatch]);

  return (
    <Load
      loading={loading}
      render={() => (
        <div className="posts">
          {posts?.map((post) => (
            <PostsComponent key={post.id} {...post} />
          ))}
        </div>
      )}
    />
  );
};

export default PostsComponent;
