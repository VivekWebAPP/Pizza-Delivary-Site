import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name :",
    value: "Vivek Shankar Phadake",
  },
  {
    label: "Age :",
    value: "20",
  },
  {
    label: "Address  :",
    value: "India",
  },
  {
    label: "Email :",
    value: "vivekphadake17@gmail.com",
  },
  
];

const jobSummary =
  "I am Vivek Shankar, a MERN Stack developer, currently a sophomore studying B.Tech in Electronics And Communication in KLE Technological University Dr MSSCET, Belgaum. I tend to create functional and responsive designs to implement and enhance the outreach of my clientale. I am currently exploring Backend services while I furnish my skills in frontend designing using the required skills.";

const About = () => {
  return (
    <section id="about" className="about">

      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__c">
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>MERN Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="red" />
              </div>
              <div>
                <DiAndroid size={60} color="green" />
              </div>
              <div>
                <FaDatabase size={60} color="rgb(91, 91, 91)" />
              </div>
              <div>
                <DiApple size={60} color="black" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
      </div>
      
    </section>
    
  );
  
};
export default About;
