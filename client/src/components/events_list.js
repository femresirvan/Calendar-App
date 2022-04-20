import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const events_list = ({ myKey, event, onDelete }) => {
  const handleTrashButton = () => {
    /**
     * TODO
     *
     * Remove this component
     */

    axios({
      method: "delete",
      url: `http://localhost:3002/api/events/${event._id}`,
      withCredentials: true,
    })
      .then((response) => {
        onDelete(event._id);
      })
      .catch((err) => {
        alert("Error while deleting. Try again...");
      });
  };

  return (
    <div className="event-wrapper">
      <div className="event">
        <h3>{event.desc ? event.desc : null}</h3>
        <p>{event.extra_desc ? event.extra_desc : null}</p>
      </div>
      <button className="trash-button" onClick={handleTrashButton}>
        <FontAwesomeIcon icon={faTrashCan} size="2x" />
      </button>
    </div>
  );
};

export default events_list;
