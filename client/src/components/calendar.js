import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import Event from "./event";
import axios from "axios";

const calendar = () => {
  const { token } = useParams();
  const [date, setDate] = useState(new Date());
  const [eventOpen, setEventOpen] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log(token);
    axios({
      method: "get",
      headers: { Authorization: token },
      url: "http://localhost:3002/api/events",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setEvents([
      ...events,
      {
        desc: "wait",
      },
    ]);
  }, []);

  const onChange = (date) => {
    setDate(date);
    console.log(date);
    setEventOpen(true);
  };

  const closeEvent = () => {
    setEventOpen(false);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      {eventOpen ? (
        <Event closeEvent={closeEvent} date={date} events={events} />
      ) : null}
    </div>
  );
};

export default calendar;
