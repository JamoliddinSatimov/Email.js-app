import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { Form } from "./components/email-address";
import { TextBox } from "./components/email-text";
import comfiLogo from "./assets/images/logo.svg";

import "./App.css";
import "./styles/single-page.scss";

function App() {
  const inputEmail = useRef(null);
  const appRef = useRef(null);
  const [data, setData] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      toEmail: inputEmail.current.value,
      from_name: "Jamoliddin",
      message: "hello how are you?",
    };

    emailjs
      .send("service_4up3pym", "template_8zvy2p6", data, "EgE1okKuRexSiKXzz")
      .then(
        (result) => {
          setData(result.text);
        },
        (error) => {
          console.log(error.text);
          inputEmail.current.style.border="2px solid red"
        }
      );
  };


  const changeMode =(e)=>{
    if (e.target.value==="light") {
      appRef.current.classList.add("light")
      return
    }
    appRef.current.classList.remove("light")
  }

  return (
    <div ref={appRef} className="app">
      <select defaultValue={"dark"} onChange={changeMode} className={"app__select-mode"}>
        <option value="dark" >dark</option>
        <option value="light" >light</option>
      </select>
      <div className="app__comfi">
        <img src={comfiLogo} />
        comfi
      </div>
      <h2 className="app__main-title">Coming soon</h2>
      <p className="app__description light__description">Comfortable finance</p>
      {data == "OK" ? (
        <TextBox />
      ) : (
        <Form sendEmail={sendEmail} inputEmail={inputEmail} />
      )}
      <p className="app__last-title light__last-title">Notify me when app is launched</p>
    </div>
  );
}

export default App;
