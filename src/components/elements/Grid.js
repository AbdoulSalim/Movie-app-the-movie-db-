import React from "react";
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

const Grid = ({ header, children }) => {
  // the children is going to contain all the MovieThumb (map) contain in the home page
  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent> {children} </StyledGridContent>
    </StyledGrid>
  );
};

export default Grid;
