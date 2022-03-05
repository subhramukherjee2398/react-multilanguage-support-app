import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufwM0-oVbCCwYY_J7SsJlDZABIlwTe_AepIeMcAn0T3T_LZOA4nqrEHxvDwJjOG_X2j4&usqp=CAU"
            alt="header-img"
            className="avatar"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
         
         <select className="nav-link bg-dark border-0">
             <option value='en'>English</option>
             <option value='fr'>Français</option>
             <option value='es'>Española</option>
         </select>
           
       </li>
      <li className="nav-item active">
       <Link to='/profile' className="nav-link">Profile</Link>
      </li>
    
    </ul>
  </div>
      </nav>
    </div>
  );
}

export default Header;
