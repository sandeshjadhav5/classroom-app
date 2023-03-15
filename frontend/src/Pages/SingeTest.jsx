import React, { useEffect } from "react";
import axios from "axios";
function SingeTest() {
  var token = JSON.parse(localStorage.getItem("token")) || "";
  console.log("token", token);
  var id = JSON.parse(localStorage.getItem("singleTest"));
  console.log("id", id);
  useEffect(() => {
    axios
      .get(`https://odd-tan-mackerel-wig.cyclic.app/tests/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("singletest");
  }, []);
  return <div></div>;
}

export default SingeTest;
