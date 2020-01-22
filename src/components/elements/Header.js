import React from "react";

import RMBDLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from "../styles/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <StyledRMDBLogo src={RMBDLogo} alt="rmdb-logo" />
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
      </div>
    </StyledHeader>
  );
};

export default Header;
