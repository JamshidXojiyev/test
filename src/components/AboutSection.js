import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSearch,
  faMapMarkerAlt,
  faMapMarker,
  faTextWidth,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <Wrapper>
      <StyledDi>
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
        <SearchInputs>
          <div className="location-input">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <input placeholder="Select Location" type="text" />
          </div>
          <div className="category-input">
            <FontAwesomeIcon icon={faPlus} />
            <input placeholder="Select Category" type="text" />
          </div>
          <div className="text-input">
            <FontAwesomeIcon icon={faTextWidth} />
            <input placeholder="Enter keyword here..." type="text" />
          </div>
        </SearchInputs>
        <StyledBut>
          <button>
            <FontAwesomeIcon icon={faSearch} />
            <span>Search</span>
          </button>
        </StyledBut>
      </StyledDi>
    </Wrapper>
  );
};

const StyledDi = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const StyledD = styled.div`
  h2 {
    font-size: 40px;
    font-weight: bold;
    line-height: 50px;
    color: white;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    /* padding-top: 175px; */
  }
  p {
    font-size: 14px;
    color: white;
    font-weight: 600;
    line-height: 17px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 45px;
    font-family: "Inter", sans-serif;
  }
`;

const SearchInputs = styled.div`
  display: flex;
  background: white;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 850px;
  height: 55px;
  color: #999999;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    border-right: 1px solid gray;
    padding: 0 10px;

    &:last-child {
      border: none;
    }

    input {
      flex: 1;
      border: none;
      padding: 10px;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      margin-left: 3px;

      &:focus {
        outline: none;
      }
    }
  }
`;

const StyledBut = styled.div`
  button {
    width: 170px;
    height: 55px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    background: #f85c70;
    color: white;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    span {
      margin-left: 8px;
    }
  }
`;

export default AboutSection;
