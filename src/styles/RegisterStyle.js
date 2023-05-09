import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  > .content {
    width: 400px;
    padding: 20px;
    border-top: 4px solid rgb(44, 177, 188);
    background-color: white;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    .heading {
      text-align: center;
      .login {
        p {
          font-size: 28px;
          margin: 20px 0;
        }
      }
    }
    form {
      width: 95%;
      margin: auto;
      .form-content {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        label {
          margin-bottom: 10px;
        }
        input {
          height: 30px;
          background-color: rgb(235, 241, 245);
          border: 1px solid rgb(215, 219, 227);
          border-radius: 5px;
          padding-left: 5px;
        }
        button {
          cursor: pointer;
          height: 40px;
          border-radius: 5px;
          background-color: rgb(44, 177, 188);
          color: white;
          border: none;
          font-weight: bold;
          margin-top: 10px;
        }
        > p {
          margin: auto;
          > span {
            color: rgb(44, 177, 188);
            font-weight: bolder;
            margin-left: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    > .content {
      width: 90%;
      margin: auto;
    }
  }
`;

export default Wrapper;
