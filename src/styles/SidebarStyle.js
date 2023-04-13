import styled from "styled-components";

const Wrapper = styled.div`
  transition: all 0.2s ease-in-out;
  background-color: white;
  min-height: 100vh;
  .show {
    width: 300px;
    > .head {
      margin-top: 20px;
      img {
        width: 200px;
        margin-left: 30px;
      }
    }
    > .body {
      background-color: white;
      margin-top: 100px;
      ul {
        li {
          width: fit-content;
          list-style: none;
          display: flex;
          align-items: center;
          margin: 40px;
          cursor: pointer;
          i {
            margin-right: 20px;
            font-size: 30px;
          }
          p {
            font-size: 26px;
          }
          &:hover i {
            color: rgb(44, 177, 188);
          }
        }
        .active i {
          color: rgb(44, 177, 188);
        }
      }
    }
  }
  .hide {
    width: 0;
    display: none;
    /* transform: translateX(-3000px); */
  }
`;

export default Wrapper;
