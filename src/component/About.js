import React from "react";
import { bold } from "ansi-colors";

function About() {
  return (
    <div className="about">
      <p>
        <b> Name: </b> Simple Blog Sample
      </p>
      <h5> Technology used </h5>
      <p>
        Html,css, React Js (withour Route,redux),Axios (for fetching dummy post)
      </p>
    </div>
  );
}
export default About;
