import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div>
        <div className="definition">
          <p className="def_word">AMRAP: workout style with a goal to complete a circuit of exercises as many times as possible
            within a specific period of time
          </p>
        </div>
        <div className="footer">
      <div className="instructions">
        <p>
          To log in as test user: <br />
          Username: Test
          <br />
          Password: Test123!
        </p>
      </div>
      <div className="external_links">
        <p>
          <a href="https://github.com/thinkful-ei-emu/colleen-capstone-client">
            Project Code: Client
          </a>
        </p>
        <p>
          <a href="https://github.com/thinkful-ei-emu/amrap-api-colleen">
            Project Code: Server
          </a>
        </p>
        <p>
          <a href="https://thinkful-ei-emu.github.io/portfolio-colleen/">
            My Portfolio
          </a>
        </p>
      </div>
      </div>
    </div>
  );
}
