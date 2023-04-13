import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 800px;
  }
  .info {
    text-align: center;
    h3 {
      font-size: 36px;
      font-weight: lighter;
      margin-bottom: 0;
    }
    p {
      font-size: 20px;
    }
    a {
      color: rgb(44, 177, 188);
      font-weight: bold;
      font-size: 20px;
    }
  }
`;

export default Wrapper;
