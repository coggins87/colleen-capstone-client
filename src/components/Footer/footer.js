import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="instructions">
        <p>
          To log in as test user: <br />
          Username: Test<br />
          Password: Test123!
        </p>
      </div>
      <div className="external_links">
        <p>
          <a href="https://github.com/thinkful-ei-emu/colleen-capstone-client">Project Code: Client</a>
        </p>
        <p>
          <a href="https://github.com/thinkful-ei-emu/amrap-api-colleen">Project Code: Server</a>
        </p>
        <p>
          <a href="https://thinkful-ei-emu.github.io/portfolio-colleen/">My Portfolio</a>
        </p>
      </div>
    </div>
  );
}
