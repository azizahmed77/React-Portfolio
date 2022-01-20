import React from "react";

const Nav = (props) => {
  const pages = ["About", "Portfolio", "Resume", "Contact"]
  return (
  <nav className="bg-dark text-white py-3">
    <h1 className="float-left font-weight-bold">Aziz Ahmed</h1>
    <ul className="nav nav-pills justify-content-end">
      {pages.map((page) => (
        <li className= "nav-item">
          <a
            href={"#" + (page.toLowerCase())}
            onClick={() => props.changePage(page)}
            className={
              props.currentPage === page ? "nav-link active" : "nav-link"
            }
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
}

export default Nav;