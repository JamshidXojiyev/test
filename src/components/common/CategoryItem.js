import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CategoryItem = (props) => {
  return (
    <StyledCategoryItem>
      <img src={props.img} />
      <div>
        <p>{props.title}</p>
        <span>0 ads</span>
      </div>
    </StyledCategoryItem>
  );
};

const StyledCategoryItem = styled.div`
  width: 235px;
  height: 149px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
  transition: all 0.4s ease;
  cursor: pointer;

  span {
    font-size: 12px;
    line-height: 15px;
    color: #999999;
    font-weight: 500;
    font-style: normal;
    font-family: "Inter", sans-serif;
  }

  &:hover {
    background: lightcoral;
    color: #fff;

    span {
      color: #fff;
    }
  }

  * {
    text-align: center;
  }
`;

export default CategoryItem;
