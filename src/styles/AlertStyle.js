import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
  .error {
    height: 40px;
    border-radius: 5px;
    background-color: rgb(246, 208, 211);
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 500;
      margin: 0;
      color: rgb(99, 19, 28);
    }
  }
  .success {
    height: 40px;
    border-radius: 5px;
    background-color: rgb(198, 226, 217);
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
      color: rgb(44, 88, 65);
    }
  }
`;

export default Wrapper;
