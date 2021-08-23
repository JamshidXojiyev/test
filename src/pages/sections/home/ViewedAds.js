import styled from "styled-components";
import ViewedAdsjr from "../../../components/common/ViewedAdsjr";
import img from "../../../assets/phone.png";

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
];
const ViewedAds = () => {
  return (
    <div>
      <Wrapper>
        <div className="content">
          <h1>Recently viewed items</h1>
          <Row>
            <ViewedAdsjr datas={ProductAds} />
          </Row>
        </div>
      </Wrapper>
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
    padding-bottom: 30px;
    font-family: "Quicksand", sans-serif;
  }
`;

export default ViewedAds;
