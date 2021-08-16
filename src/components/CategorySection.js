import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGlassMartini } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faMale } from "@fortawesome/free-solid-svg-icons";
import { faFileArchive } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import CategoryItem from "./common/CategoryItem";

const CategorySection = () => {
  const data = [
    { img: faArchive, title: "Buisness" },
    { img: faGraduationCap, title: "Education" },
    { img: faGlassMartini, title: "Electronics" },
    { img: faHeart, title: "Health & Beauty" },
    { img: faFutbol, title: "Hobby, Sport & Kids" },
    { img: faMale, title: "Home Appliances" },
    { img: faFileArchive, title: "Others" },
    { img: faCalculator, title: "Property" },
  ];

  return (
    <div>
      <div className="category-des">
        <h2>Popular Category</h2>
      </div>
      <div className="category-div">
        {data.map((item) => (
          <CategoryItem img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
