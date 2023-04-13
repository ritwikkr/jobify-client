import styled from "styled-components";

const Wrapper = styled.div`
  height: 100px;
  /* width: 100%; */
  /* width: 100vw; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: white;
  transition: all 0.2s ease-in-out;
  .menu {
    i {
      font-size: 36px;
      cursor: pointer;
      color: rgb(44, 177, 188);
    }
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    height: 40px;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(44, 177, 188);
    color: white;
    position: relative;
    .dropdown {
      /* border: 2px solid red; */
      padding: 5px 20px;
      width: 150px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 150%;
      left: 0;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background-color: rgb(185, 245, 252);
      p {
        color: rgb(44, 177, 188);
      }
    }
    .show {
      display: none;
    }
  }
`;

export default Wrapper;
