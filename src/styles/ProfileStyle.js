import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  padding: 20px 30px;
  > .body {
    background-color: white;
    width: 95%;
    margin: 20px auto 0;
    padding: 20px;
    > .title {
      margin-bottom: 20px;
      > p {
        font-size: 32px;
      }
    }
    > .content {
      > form {
        > .top,
        > .bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          > .form-content {
            display: flex;
            flex-direction: column;
            > label {
              margin-bottom: 5px;
            }
            > input {
              width: 380px;
              height: 30px;
              border-radius: 5px;
              background-color: rgb(235, 241, 245);
              border: 1px solid lightgray;
              padding-left: 10px;
            }
          }
        }
        > .bottom {
          justify-content: flex-start;
          align-items: flex-end;
          margin-top: 30px;
          > .form-content {
            > button {
              width: 380px;
              height: 30px;
              border-radius: 5px;
              margin-left: 9%;
              border: none;
              background-color: rgb(44, 177, 188);
              color: white;
              cursor: pointer;
              box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;