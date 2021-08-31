import SpinnerComponent from "../shared-components/spinner";

const LoadApi = ({ load, render }) => (
  <>{load ? <SpinnerComponent /> : render()}</>
);

export default LoadApi;
