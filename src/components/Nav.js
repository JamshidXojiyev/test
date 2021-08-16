import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <StyledNav>
      <StyledH1>
        <a href="#">Dems</a>
      </StyledH1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">All Ads</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faComment} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faUserAlt} />
          </a>
        </li>
        <li>
          <button>
            <FontAwesomeIcon icon={faPlus} /> Post your Ad
          </button>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  a {
    color: white;
    text-decoration: none;
    font-size: 21px;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }
  button {
    background: #f85c70;
    border-radius: 18px;
    border: 1px solid #f85c70;
    color: white;
    width: 155px;
    height: 50px;
    cursor: pointer;
  }
  li {
    padding-left: 2.25rem;
  }
`;

const StyledH1 = styled.h1`
  a {
    font-size: 50px;
    font-weight: 700;
  }
`;

export default Nav;
