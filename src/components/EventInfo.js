import { style } from "@mui/system";
import React from "react";
 
const EventInfo = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        { props.content}
      </div>
    </div>
  );
};
 
export default EventInfo;