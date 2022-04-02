import React, { useEffect, useState, useRef } from "react";
import Events_list from "./events_list";
import axios from "axios";
const event = ({ closeEvent, date, selectedEvents, getAgain, token }) => {
  const modal = useRef(null);
  const [event, setEvent] = useState({
    desc: "",
    extra_desc: "",
    date_day: 0,
    date_month: 0,
    date_year: 0,
  });

  const [events, setEvents] = useState([...selectedEvents]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvent((prevState) => ({
      ...prevState,
      date_day: date.getDate(),
      date_month: date.getMonth() + 1,
      date_year: date.getFullYear(),
    }));
    axios({
      method: "post",
      url: "http://localhost:3002/api/events",
      headers: { "content-type": "application/json", Authorization: token },
      data: {
        events: {
          desc: event.desc,
          extra_desc: event.extra_desc,
          date_day: date.getDate(),
          date_month: date.getMonth() + 1,
          date_year: date.getFullYear(),
        },
      },
    })
      .then((response) => {
        getAgain();
        const temporaryArray = [];
        response.data.result.events.forEach((element) => {
          if (
            element.date_day == date.getDate() &&
            element.date_month == date.getMonth() + 1 &&
            element.date_year == date.getFullYear()
          )
            temporaryArray.push(element);
        });

        setEvents([...temporaryArray]);

        // setEvents([...response.data.result.events]);
      })
      .catch((err) => {
        alert("Error while setEvent. Try again...");
      });
  };

  useEffect(() => {}, [selectedEvents]);

  const handleDelete = (id) => {
    getAgain();
    let tempArr = events.filter((value, index, arr) => {
      return value._id != id;
    });
    setEvents(tempArr);
  };

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
              name="extra_desc"
              placeholder="Desc"
              value={event.extra_desc}
              onChange={handleChange}
            />
          </div>
          <button className="btn-classic">Enter event</button>
        </form>
        <h2>
          Your Events on {date.getDate()}.{date.getMonth() + 1}.
          {date.getFullYear()}
        </h2>
        {events.map((item, index) => {
          return (
            <Events_list
              key={index}
              event={item}
              token={token}
              getAgain={getAgain}
              onDelete={handleDelete}
              myKey={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default event;
