import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const events_list = ({ event }) => {
  return (
    <div className="event-wrapper">
      <div className="event">
        <h3>{event.desc}</h3>
        <p>{event.extraDesc}</p>
      </div>
      <button className="trash-button">
        <FontAwesomeIcon icon={faTrashCan} size="2x" />
      </button>
    </div>
  );
};

export default events_list;
