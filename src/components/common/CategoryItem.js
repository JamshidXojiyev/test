import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CategoryItem = (props) => {
  return (
    <StyledCategoryItem>
      <FontAwesomeIcon icon={props.img} />
      <div>
        <p>{props.title}</p>
        <pre>0 ads</pre>
      </div>
    </StyledCategoryItem>
  );
};

const StyledCategoryItem = styled.div`
  width: 235px;
  height: 149px;
`;

export default CategoryItem;
