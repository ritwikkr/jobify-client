let BASE_URL = `https://jobify-api-sq50.onrender.com/api/v1`;

if (process.env.REACT_APP_NODE_ENV === "development")
  BASE_URL = "http://localhost:5000/";

export default BASE_URL;
