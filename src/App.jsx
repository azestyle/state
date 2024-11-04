import "./style.css";
import React, { useState } from "react";
import FormInput from "./Form";
import UiText from "./Text";

function App() {
  const [data, setdata] = useState([]);
  function Keepinformaiton(event) {
    setdata([...data, event]);
  }

  const Handletext = data.map((ev, index) => (
    <UiText key={index} name={ev.name} surname={ev.surname} email={ev.email} />
  ));

  return (
    <div className="App">
      <div className="formdiv">
        <FormInput submit={Keepinformaiton} />
      </div>
      <div className="textbox">{Handletext}</div>
    </div>
  );
}

export default App;
