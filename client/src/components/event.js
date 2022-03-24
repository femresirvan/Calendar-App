import React, { useEffect, useState, useRef } from "react";
import Events_list from "./events_list";
const event = ({ closeEvent, date }) => {
  const modal = useRef(null);

  const [event, setEvent] = useState({
    desc: "",
    extraDesc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(event);
  };
  useEffect(() => {
    console.log("amkdfksf");
    // modal.current.style.display = "block";
  }, []);

  const closeModal = () => {
    closeEvent();
  };

  return (
    <div className="modal-background" ref={modal}>
      <div className="modal-wrapper">
        <button onClick={closeModal} className="modal-close">
          Close
        </button>

        <h2>Create an Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              required
              value={event.desc}
              name="desc"
              placeholder="Title"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="text"
              required
              name="extraDesc"
              placeholder="Desc"
              value={event.extraDesc}
              onChange={handleChange}
            />
          </div>
          <button className="btn-classic">Enter event</button>
        </form>
        <h2>
          Your Events on {date.getDate()}.{date.getMonth() + 1}.
          {date.getFullYear()}
        </h2>
        <Events_list />
      </div>
    </div>
  );
};

export default event;
