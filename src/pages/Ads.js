import styled from "styled-components";
import Adsjr from "../components/common/Adsjr";

const Ads = () => {
  return (
    <div>
      <Wrapper>
        <div className="content">
          <div>
            <h1>Featured Ads</h1>
          </div>
          <Row>
            <Adsjr />
            <Adsjr />
            <Adsjr />
            <Adsjr />
          </Row>
          <Row>
            <Adsjr />
            <Adsjr />
            <Adsjr />
            <Adsjr />
          </Row>
          <Row>
            <Adsjr />
            <Adsjr />
            <Adsjr />
            <Adsjr />
          </Row>
        </div>
      </Wrapper>
      <StyledH>Show more...</StyledH>
    </div>
  );
};

const Row = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
  & > div.content {
    padding: 20px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 15px;
    text-align: center;
    padding-bottom: 30px;
    font-family: "Quicksand", sans-serif;
  }
`;

const StyledH = styled.h1`
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  font-style: normal;
  font-family: "Quicksand", sans-serif;
  text-align: center;
  color: #000000;
  padding-bottom: 66px;
`;

export default Ads;
