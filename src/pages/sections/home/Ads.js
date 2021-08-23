import styled from "styled-components";
import Adsjr from "../../../components/common/Adsjr";
import img from "../../../assets/phone.png";
import { Link } from "react-router-dom";

const ProductAds = [
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },

  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    product: "Galaxy Note",
    data: "1 year ago",
    name: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
];
const Ads = () => {
  return (
    <div>
      <Wrapper>
        <div className="content">
          <div>
            <h1>Featured Ads</h1>
          </div>
          <Row>
            <Adsjr datas={ProductAds} />
          </Row>
        </div>
      </Wrapper>
      <StyledH>Show more...</StyledH>
    </div>
  );
};

const Row = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 217px;
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
    padding-bottom: 5px;
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
