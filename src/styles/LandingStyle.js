import styled from "styled-components";

const Wrapper = styled.div`
  > .content {
    width: 65%;
    margin: 20px auto 0;
    .body {
      display: flex;
      align-items: center;
      margin-top: 150px;
      .info {
        width: 600px;
        h1 {
          font-size: 40px;
          span {
            color: rgb(44, 177, 188);
          }
        }
        p {
          line-height: 25px;
          margin-bottom: 30px;
          color: gray;
          font-size: 15px;
        }
        button {
          cursor: pointer;
          height: 40px;
          background-color: rgb(44, 177, 188);
          color: white;
          border-radius: 5px;
          border: none;
          width: 180px;
          box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
        }
      }
      .image {
        width: 800px;
        height: 500px;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    > .content {
      width: 80%;
      > .body {
        height: 50vh;
        align-items: flex-end;
        > .image {
          display: none;
        }
      }
    }
  }
`;

export default Wrapper;
