import React from "react";
import img from "../assets/phone.png";

const datas = [
  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },

  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },

  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
  {
    img: img,
    name: "Galaxy Note",
    time: "1 year ago",
    user: "Murodjon Tursunov",
    location: "Beshariq  shahar, Farg’ona viloyati",
    price: "$1,240",
  },
];

function Ads(props) {
  return (
    <div
      style={{
        padding: "69px 195px",
        margin: "0 auto",
        backgroundColor: "#E5E5E5",
      }}
    >
      <h1
        style={{
          fontWeight: "700",
          fontSize: "30px",
          textAlign: "center",
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        Featured Ads
      </h1>
      <div
        style={{
          margin: "40px auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {datas.map((data, index) => (
          <div
            style={{
              backgroundColor: "#fff",
              width: "235px",
              marginLeft: "25px",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <img src={data.img} width="100%" />
              <svg
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
                width="76"
                height="75"
                viewBox="0 0 76 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 75V0H76L0.5 75Z" fill="#F85C70" />
                <path
                  d="M12.6667 23.7417V15.7583C12.6667 14.65 13.3084 14.3833 14.0917 15.1667L16.25 17.325C16.575 17.65 17.1084 17.65 17.425 17.325L20.4084 14.3333C20.7334 14.0083 21.2667 14.0083 21.5834 14.3333L24.575 17.325C24.9 17.65 25.4334 17.65 25.75 17.325L27.9084 15.1667C28.6917 14.3833 29.3334 14.65 29.3334 15.7583V23.75C29.3334 26.25 27.6667 27.9167 25.1667 27.9167H16.8334C14.5334 27.9083 12.6667 26.0417 12.6667 23.7417Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              style={{
                margin: "21px 18px",
              }}
            >
              <h1
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#2A2A2A",
                }}
              >
                Galaxy Note
              </h1>
              <ul style={{ margin: "16px 0" }}>
                <li
                  style={{
                    listStyle: "none",
                    color: "#999",
                    marginTop: "0",
                    marginBottom: "9px",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16665 5.00004C9.16665 7.30004 7.29998 9.16671 4.99998 9.16671C2.69998 9.16671 0.833313 7.30004 0.833313 5.00004C0.833313 2.70004 2.69998 0.833374 4.99998 0.833374C7.29998 0.833374 9.16665 2.70004 9.16665 5.00004Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.54583 6.32498L5.25416 5.55415C5.02916 5.42082 4.84583 5.09998 4.84583 4.83748V3.12915"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span
                    style={{
                      marginLeft: "10px",
                      fontSize: "12px",
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {data.time}
                  </span>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    color: "#999",
                    marginTop: "0",
                    marginBottom: "9px",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00002 5.00004C6.15061 5.00004 7.08335 4.0673 7.08335 2.91671C7.08335 1.76611 6.15061 0.833374 5.00002 0.833374C3.84943 0.833374 2.91669 1.76611 2.91669 2.91671C2.91669 4.0673 3.84943 5.00004 5.00002 5.00004Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.57917 9.16667C8.57917 7.55417 6.975 6.25 5 6.25C3.025 6.25 1.42084 7.55417 1.42084 9.16667"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      marginLeft: "10px",
                      fontSize: "12px",
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {data.user}
                  </span>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    color: "#999",
                    marginTop: "0",
                    marginBottom: "9px",
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00001 5.59585C5.71798 5.59585 6.30001 5.01382 6.30001 4.29585C6.30001 3.57788 5.71798 2.99585 5.00001 2.99585C4.28204 2.99585 3.70001 3.57788 3.70001 4.29585C3.70001 5.01382 4.28204 5.59585 5.00001 5.59585Z"
                      stroke="#999999"
                      stroke-width="1.5"
                    />
                    <path
                      d="M1.50831 3.53754C2.32915 -0.0707917 7.67498 -0.0666249 8.49165 3.54171C8.97081 5.65837 7.65415 7.45004 6.49998 8.55838C5.66248 9.36671 4.33748 9.36671 3.49581 8.55838C2.34581 7.45004 1.02915 5.65421 1.50831 3.53754Z"
                      stroke="#999999"
                      stroke-width="1.5"
                    />
                  </svg>

                  <span
                    style={{
                      marginLeft: "10px",
                      fontSize: "12px",
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {data.location}
                  </span>
                </li>
              </ul>
              <button
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#F85C70",
                  border: "none",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
              >
                {data.price}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            fontSize: "24px",
            color: "#000",
            textAlign: "center",
            fontFamily: "'Quicksand', sans-serif",
            border: 0,
            backgroundColor: "#ffffff00",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Show more...
        </button>
      </div>
    </div>
  );
}

export default Ads;
