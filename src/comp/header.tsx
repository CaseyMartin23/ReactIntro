import React from "react";

interface Props {
  currentDate: string;
  name: string;
}

export const Header: React.FC<Props> = props => {
  return (
    <div className="Header">
      <div className="container row">
        <div className="col-sm">
          <div className="UnderLine Welcome">Welcome, {props.name}</div>
        </div>
        <div className="col-sm">
          <label className="UnderLine DateTime">{props.currentDate}</label>
        </div>
      </div>
      <div className="Description">Header</div>
    </div>
  );
};
