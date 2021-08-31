import PostsComponent from "./components/posts/posts";
import ReplyComponent from "./components/reply/reply";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8">
          <PostsComponent />
        </div>
        <div className="col-12 col-md-4">
          <ReplyComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
