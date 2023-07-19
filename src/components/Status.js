import React from "react";
import styled from "styled-components";

function Status({ status }) {
  let bgColor;
  let textColor;
  if (status === "declined") {
    bgColor = "rgb(255,234,233)";
    textColor = "rgb(184,124,126)";
  } else if (status === "interview") {
    bgColor = "rgb(220,228,242)";
    textColor = "rgb(183,196,220)";
  } else {
    bgColor = "rgb(250,237,189)";
    textColor = "rgb(224,197,129)";
  }
  return (
    <Wrapper style={{ backgroundColor: bgColor }}>
      <p style={{ color: textColor }}>{status}</p>
    </Wrapper>
  );
}

export default Status;

const Wrapper = styled.div`
  height: 30px;
  border-radius: 5px;
  width: 100px;
  background-color: rgb(255, 239, 239);
  color: rgb(215, 117, 148);
  display: flex;
  align-items: center;
  justify-content: center;
`;
