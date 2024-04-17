import axios from "axios";
import React, { useEffect, useState } from "react";

function Hello() {
  const [hello, setHello] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/hello").then((res) => {
      console.log(res.data);
      setHello(res.data);
    });
  }, []);

  return <div>{hello}</div>;
}

export default Hello;
