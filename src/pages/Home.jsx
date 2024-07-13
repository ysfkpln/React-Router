import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  function navigateHandler(){
    navigate("/products");
  }
  return (
    <Fragment>
      <h1>My Home Page</h1>
      {/* {<Link to="/products">Go to Producs Page</Link>} */}
      <button onClick={navigateHandler}>Go to Producs Page</button>
    </Fragment>
  );
};

export default HomePage;
