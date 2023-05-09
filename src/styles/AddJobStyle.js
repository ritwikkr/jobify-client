import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  > .form-content {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 33%;
    > label {
      margin-bottom: 10px;
    }
    > select {
      height: 30px;
      background-color: rgb(235, 241, 245);
    }
  }
  > .btn {
    flex-direction: row;
    justify-content: space-between;
    > button {
      width: 48%;
      height: 30px;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      &:first-child {
        background-color: rgb(44, 177, 188);
      }
      &:nth-child(2) {
        background-color: rgb(86, 113, 141);
      }
    }
  }

  @media only screen and (max-width: 1120px) {
    > .form-content {
      width: 33%;
    }
  }

  @media only screen and (max-width: 700px) {
    > .form-content {
      width: 100% !important  ;
    }
  }
`;

export default Wrapper;
