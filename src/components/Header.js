import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import i18n from "../i18n";
function Header() {
  const { i18next, t } = useTranslation(["common"]);
  const [flag,setflag] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLangChange = (e) => {
    console.log(e.target.value)
    i18n.changeLanguage(e.target.value)
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
         <h4>{t("multi lamguage app")}</h4>
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
              <select
                className="nav-link bg-dark border-0"
                value={localStorage.getItem("i18nextLng")}
                onChange={handleLangChange}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es" disabled>Española</option>
              </select>
            </li>
            <li className="nav-item active">
              <Link to="/profile" className="nav-link">
                {t("profile")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
