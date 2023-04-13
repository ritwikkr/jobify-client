import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 50px auto;
  > .head {
    margin-bottom: 20px;
    > p {
      font-weight: 900;
      font-size: 20px;
    }
  }
  > .body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export default Wrapper;
