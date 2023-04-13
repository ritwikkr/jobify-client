import React from "react";
import Wrapper from "../styles/DashboardCardStyle";

function DashboardCard({ count, icon, name, bgColor, color }) {
  return (
    <Wrapper>
      <div className="top">
        <p style={{ color }}>{count}</p>
        <div className="icon" style={{ backgroundColor: bgColor }}>
          <i className={icon} style={{ color }}></i>
        </div>
      </div>
      <div className="bottom">
        <p>{name}</p>
      </div>
      <div className="line" style={{ backgroundColor: color }}></div>
    </Wrapper>
  );
}

export default DashboardCard;
