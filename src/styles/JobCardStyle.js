import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  width: 49%;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
  text-transform: capitalize;
  > .title {
    padding: 20px;
    display: flex;
    > .left {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      background-color: rgb(44, 177, 188);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      font-weight: 900;
      margin-right: 30px;
    }
    > .right {
      > p {
        margin-bottom: 10px;
      }
      > .company {
        color: gray;
        font-size: 15px;
        letter-spacing: 1.5px;
      }
    }
  }
  > .body {
    padding: 20px;
    > .top,
    > .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      > .location,
      > .date,
      > .type,
      > .status {
        color: gray;
        display: flex;
        align-items: center;
        > i {
          margin-right: 10px;
        }
      }
    }
    > .bottom {
      margin: 20px 0;
      > .status {
        height: 30px;
        border-radius: 5px;
        width: 100px;
        background-color: rgb(255, 239, 239);
        color: rgb(215, 117, 148);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    > .buttons {
      > button {
        cursor: pointer;
        width: 80px;
        height: 30px;
        margin-right: 10px;
        border-radius: 5px;
        border: none;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
        &:first-child {
          background-color: rgb(208, 231, 220);
          color: rgb(27, 83, 50);
        }
        &:nth-child(2) {
          background-color: rgb(248, 214, 219);
          color: rgb(146, 38, 46);
        }
      }
    }
  }
`;

export default Wrapper;
