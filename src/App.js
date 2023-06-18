import "./styles.css";
import { useState } from "react";
export default function App() {
  const [state, setState] = useState({
    first: "",
    last: "",
    city: "",
    address: "",
    a: "",
    b: "",
    date: ""
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitHandler = () => {
    console.log(state);
    setState({
      first: "",
      last: "",
      city: "",
      address: "",
      a: "",
      b: "",
      date: ""
    });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          name="first"
          onChange={changeHandler}
          value={state.first}
          placeholder="enter your first name"
        />
        <input
          type="text"
          name="last"
          onChange={changeHandler}
          value={state.last}
          placeholder="enter your last name"
        />
        <input
          type="text"
          name="city"
          onChange={changeHandler}
          value={state.city}
          placeholder="enter your city name"
        />
        <input
          type="text"
          name="address"
          onChange={changeHandler}
          value={state.address}
          placeholder="enter your address name"
        />
        <input
          type="text"
          name="a"
          onChange={changeHandler}
          value={state.a}
          placeholder="enter your a name"
        />
        <input
          type="text"
          name="b"
          onChange={changeHandler}
          value={state.b}
          placeholder="enter your b name"
        />
        <input
          type="date"
          name="date"
          onChange={changeHandler}
          value={state.date}
        />
        <button onClick={submitHandler}>submit</button>
      </div>
    </div>
  );
}
