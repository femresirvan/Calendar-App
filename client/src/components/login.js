import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();
  // const userRef = useRef();
  // const errRef = useRef();

  const [user, setUser] = useState({
    token: "",
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    axios({
      method: "post",
      url: "http://localhost:3002/auth/login",
      headers: { "content-type": "application/json" },
      data: { username: user.username, password: user.password },
    })
      .then((response) => {
        setUser((prevState) => ({
          ...prevState,
          token: response.data.token,
          name: response.data.name,
        }));
        console.log(response);
        // return <Navigate to="/calendar" />;
        navigate(`/calendar/${response.data.token}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <h2>Calendar App</h2>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            required
            value={user.username}
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <input
            type="password"
            required
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn-classic">Login!</button>
      </form>
    </div>
  );
};

export default login;
