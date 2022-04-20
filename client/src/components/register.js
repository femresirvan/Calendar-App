import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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
      url: "http://localhost:3002/auth/register",
      withCredentials: true,
      headers: { "content-type": "application/json" },
      data: {
        username: user.username,
        password: user.password,
        name: user.name,
      },
    })
      .then((response) => {
        setUser((prevState) => ({
          ...prevState,
          name: response.data.name,
        }));
        console.log(response);
        // return <Navigate to="/calendar" />;
        navigate(`/calendar`);
      })
      .catch((err) => {
        alert("Error while registering. Try again...");
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
            value={user.name}
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
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
        <button className="btn-classic">Register</button>
        <div className="link">
          <a href="/">Return to login</a>
        </div>
      </form>
    </div>
  );
};

export default register;
