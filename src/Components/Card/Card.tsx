import React from "react";
import "./style.css";
// react icons
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { RxDividerVertical } from "react-icons/rx";
import { BsFillCircleFill } from "react-icons/bs";
//asset image
import linkedinLogo from "../../Assets/images/linkedin.png";
//common component
import ExperienceAndEducation from "../Common/ExperienceAndEducation/ExperienceAndEducation";
import { cardsList } from "../../static_data";
const Card = () => {
  return (
    <>
      {cardsList.map((cardData, index) => (
        <div className="mainContainer" key={index}>
          {/* Name and Title */}
          <div>
            <div className="nameContainer">
              <p className="personName">{cardData.name}</p>
              <IoCallOutline size={20} color="#808080" className="nameContainerIcon" />
              <HiOutlineMail size={20} color="#808080" className="nameContainerIcon" />
              <RxDividerVertical size={20} color="#808080" className="nameContainerIcon" />
              <img
                src={linkedinLogo}
                alt="linkedin"
                width={20}
                height={20}
                className="linkedinLogo"
              />
            </div>
            <div className="titleContainer">
              <p>{cardData.current_title}</p>
              <BsFillCircleFill size={5} color="#DCDCDC" className="filledCircle" />
              <p className="location">{cardData.location}</p>
            </div>
          </div>
          <hr />
          {/* Experience and Education */}
          <div>
            <div className="subContainer">
              <p className="subTitle">Experiance</p>
              <ExperienceAndEducation info={cardData.experience} title="experience" />
            </div>
            <div className="subContainer">
              <p className="subTitle">Education</p>
              <ExperienceAndEducation info={cardData.education} title="education" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
