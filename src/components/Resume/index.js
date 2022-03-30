import React from "react";
import myResume from '../../assets/resume.pdf'


const Resume = () => {
  return (
    <main>
      <h2 className="pb-3">Resume</h2>
        <a href = {myResume} download="resume.pdf">
            Download Resume
        </a>
        
      <div class="justify-content-center mt-5">
        <div>
          <h2>Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS, JavaScript, jQuery, Node.js, Express.js, SQL, IndexedDB,<br />
            MongoDB, NoSQL, React
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Resume;