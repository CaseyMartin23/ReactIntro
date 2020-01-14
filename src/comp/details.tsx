import React from "react";

interface Props {
  onClicker(): void;
  onChanger(e: any): void;
}

export const Details: React.FC<Props> = props => {
  return (
    <div className="Details">
      <div className="NameDiv UnderLine">
        <label className="NameLabel">Name</label>
        <input
          className="Input"
          onChange={props.onChanger}
          placeholder="                   {name}  "
        />
      </div>
      <div className="ButtonUnder UnderLine">
        <div className="Button" onClick={props.onClicker}>
          This is a button
        </div>
      </div>
      <div className="Detail Description">Detail</div>
    </div>
  );
};
