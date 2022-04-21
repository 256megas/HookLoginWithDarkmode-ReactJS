import { useState, useRef } from "react";
import fakeData from "../../fakeData";
import "./LoginForm.css";
const LoginForm = () => {
  const [style, setStyle] = useState("lightMode");
  // I Choose to make individual states for each input, because
  // I want to be able to validate individually and practice more code.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const refEmail = useRef();
  const refPassword = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty(email) && !isEmpty(password)) {
      fakeData.some((user) => {
        if (
          user.email === email &&
          user.password === password &&
          user.isLoggeable
        ) {
          console.log("Right Login and Loggeable");
          console.log("----------------------------------");
          alert("Right Login and Loggeable");
          return true;
        } else {
          console.log("Wrong Login and not loggeable");
          console.log("----------------------------------");
          return false;
        }
      });
    }
  };

  const handleEmail = (e) => {
    isEmpty(refEmail.current.value)
      ? setEmail(null)
      : setEmail(refEmail.current.value);
  };

  const handlePassword = (e) => {
    isEmpty(refPassword.current.value)
      ? setPassword(null)
      : setPassword(refPassword.current.value);
  };

  const isEmpty = (fieldData) => {
    if (fieldData.length > 0) {
      return false;
    }
    return true;
  };

  const handleColor = (e) => {
    setStyle(e.target.value);
  };

  return (
    <div className={style}>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleEmail}
          ref={refEmail}
          required
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePassword}
          ref={refPassword}
          required
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <input
          type="radio"
          name="mode"
          value="lightMode"
          onChange={handleColor}
        />{" "}
        Light
        <input
          type="radio"
          name="mode"
          value="darkMode"
          onChange={handleColor}
        />{" "}
        Dark
      </form>
    </div>
  );
};

export default LoginForm;
