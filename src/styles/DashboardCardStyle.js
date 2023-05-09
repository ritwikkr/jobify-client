import styled from "styled-components";

const Wrapper = styled.div`
  height: 200px;
  width: 33%;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  position: relative;
  margin-bottom: 20px;
  .top {
    margin: 40px auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
      font-size: 48px;
    }
    > .icon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      > i {
        font-size: 28px;
      }
    }
  }
  > .bottom {
    width: 90%;
    margin: auto;
    font-size: 20px;
  }
  .line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7px;
    border-radius: 0 0 5px 5px;
  }
  @media only screen and (max-width: 1110px) {
    width: 49%;
  }

  @media only screen and (max-width: 600px) {
    border: 2px solid blue;
    width: 100%;
  }
`;

export default Wrapper;
