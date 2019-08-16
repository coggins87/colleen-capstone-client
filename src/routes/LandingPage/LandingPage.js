import React from "react";
import "./landing-page.css";

export default function LandingPage() {
  return (
    <div className="Landing_page">
      <div className="heading_page">
        <h2 className="landing_title">
          Create randomly generated AMRAP workouts
        </h2>
        <h4 className="subheader">
          From a database of movements curated by a licensed physical therapist
        </h4>
      </div>
      <ul className="app_desc">
        <li>Click 'Generate A Workout' to search for a new AMRAP workout</li>
        <li>Create an account or log in to save workouts for later!</li>
      </ul>
      <div className="definition">
        <p className="def_word">AMRAP[amrap]:</p>
        <p>
          {" "}
          noun
          <br />
          1. An abbreviation that means 'as many reps as possible'
          <br />
          2. To complete a circuit of exercises as many times as possible within
          a specific period of time
        </p>
      </div>
    </div>
  );
}
