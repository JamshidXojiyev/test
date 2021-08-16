import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <div>
      <StyledD className="description">
        <div className="title">
          <div className="hide">
            <h2>Buy, Sell, Rent & Exchange in one Click</h2>
          </div>
          <p>
            <img src={faSearch} alt="" /> Search from over 2000+ Active Ads in
            29+ Categories for Free
          </p>
        </div>
      </StyledD>
      <div className="search-inputs">
        <div className="location-input">
          <input type="text" />
        </div>
        <div className="category-input">
          <input type="text" />
        </div>
        <div className="text-input">
          <input type="text" />
        </div>
        <div className="search-button">
          <button>
            Search
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

const StyledD = styled.div`
  h2 {
    font-size: 50px;
  }
`;

export default AboutSection;
