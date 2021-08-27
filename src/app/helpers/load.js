import SpinnerComponent from "../shared-components/spinner";

const Load = ({ loading, render }) => {
  return loading ? <SpinnerComponent /> : render();
};

export default Load;
