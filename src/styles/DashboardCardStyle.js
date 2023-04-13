import styled from "styled-components";

const Wrapper = styled.div`
  height: 250px;
  /* width: 430px; */
  width: 31%;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  position: relative;
  .top {
    /* border: 2px solid blue; */
    margin: 50px auto;
    width: 350px;
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
    width: 350px;
    margin: auto;
    /* border: 2px solid red; */
    /* padding-left: 50px; */
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
`;

export default Wrapper;
