import React from "react";

const Nav = (props) => {
  const pages = ["About", "Portfolio", "Resume", "Contact"]
  return (
  <nav>
    <ul className="nav justify-content-center flex-row">
      {pages.map((page) => (
        <li
          className={ `mx-2${
            props.currentPage === page && "nav-item"
          }`}
          key={page}
        >
          <a
            href={"#" + page}
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