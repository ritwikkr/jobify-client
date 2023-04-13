import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 30px auto;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  > .title {
    margin: 20px 0 30px 0;
    > p {
      font-size: 28px;
    }
  }
  > .body {
    > form {
      > .top,
      > .bottom {
        display: flex;
        > .form-content {
          margin-right: 10px;
          display: flex;
          flex: 1;
          flex-direction: column;
          > input,
          > select {
            height: 30px;
            background-color: rgb(240, 245, 249);
            border: 1px solid gray;
            border-radius: 5px;
            padding-left: 10px;
          }
        }
      }
      > .bottom {
        margin: 30px 0;
        align-items: flex-end;
        /* border: 2px solid blue; */
        > .form-content {
          flex: unset;
          width: 32.5%;
          > button {
            height: 30px;
            background-color: rgb(248, 214, 219);
            color: rgb(138, 58, 86);
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
            font-weight: 900;
            transition: all 0.2s ease-in-out;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
              background-color: maroon;
              color: white;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
