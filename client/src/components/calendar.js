import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import Event from "./event";
import axios from "axios";

const calendar = () => {
  const { token } = useParams();
  const [date, setDate] = useState(new Date());
  const [eventOpen, setEventOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      date_day: 0,
      date_month: 0,
      date_year: 0,
      extra_desc: "",
      desc: "",
      _id: "",
    },
  ]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      headers: { Authorization: token },
      url: "http://localhost:3002/api/events",
    })
      .then((response) => {
        setEvents([...response.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onChange = (date) => {
    const temporaryArray = [];
    setDate(date);
    events.forEach((element) => {
      if (
        element.date_day == date.getDate() &&
        element.date_month == date.getMonth() + 1 &&
        element.date_year == date.getFullYear()
      )
        temporaryArray.push(element);
    });

    setSelectedEvents(temporaryArray);
    setEventOpen(true);
  };
  const closeEvent = () => {
    setEventOpen(false);
  };
  const getAgain = () => {
    axios({
      method: "get",
      headers: { Authorization: token },
      url: "http://localhost:3002/api/events",
    })
      .then((response) => {
        setEvents([...response.data.data]);
        const temporaryArray = [];
        events.forEach((element) => {
          if (
            element.date_day == date.getDate() &&
            element.date_month == date.getMonth() + 1 &&
            element.date_year == date.getFullYear()
          )
            temporaryArray.push(element);
        });
        setSelectedEvents(temporaryArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      {eventOpen ? (
        <Event
          closeEvent={closeEvent}
          date={date}
          selectedEvents={selectedEvents}
          getAgain={getAgain}
          token={token}
        />
      ) : null}
    </div>
  );
};

export default calendar;
