import { useState } from "react";
import axios from "axios";

function Motivation() {
  const [msg, setMsg] = useState("");
  const [aut, setAut] = useState("");

  const gm = (event) => {
    event.preventDefault();
    let url = "https://quotes-api-self.vercel.app/quote";
    axios
      .get(url)
      .then((res) => {
        setMsg(res.data.quote);
        setAut(res.data.author);
      })
      .catch((err) => {
        setMsg("issue: " + err);
      });
  };

  return (
    <>
      <center>
        <h1>Motivation App</h1>
        <form onSubmit={gm}>
          <input type="submit" value="Get Msg" />
        </form>
        <h2>{msg}</h2>
        <h2>{aut}</h2>
      </center>
    </>
  );
}

export default Motivation;
