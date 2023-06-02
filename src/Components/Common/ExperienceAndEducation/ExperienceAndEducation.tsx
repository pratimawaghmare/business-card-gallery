import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import "./style.css";
import college1 from "../../../Assets/images/college1.png";
import college2 from "../../../Assets/images/college2.png";
import company1 from "../../../Assets/images/company1.jpeg";
import company2 from "../../../Assets/images/company2.png";
interface PropModel {
  info: string[];
  title: string;
}
var companyLogo: string[] = [company1, company2];
var collegeLogo: string[] = [college1, college2];
const ExperienceAndEducation = (data: PropModel) => {
  return (
    <div className="listConatiner">
      {data.info.map((value, index) => (
        <div key={index}>
          <div className="listSubContainer">
            <BsFillCircleFill size={8} color="#DCDCDC" className="filledCircle" />
            <img
              src={data.title === "experience" ? companyLogo[index] : collegeLogo[index]}
              className="companyLogo"
              alt="company"
              width={15}
              height={15}
            />
            <p className="names">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceAndEducation;
