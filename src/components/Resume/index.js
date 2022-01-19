import React from "react";


const Resume = () => {
  return (
    <main>
      <h2 className="pb-3">Resume</h2>
        <a href="../../assets/devsampleresume.pdf" download="sample-resume">
            Download Sample Resume
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