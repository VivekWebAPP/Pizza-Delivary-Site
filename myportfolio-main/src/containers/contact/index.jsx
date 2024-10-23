import React, { useContext, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import profilephoto from '../../images/Profile-Photo.jpg';
import "./styles.scss";
import Context from "../../context/ContextState";

const Contact = () => {
  const [contactInfo, setcontactInfo] = useState({
    name: '',
    email: '',
    text: '',
  });
  const context = useContext(Context);
  const { handleContactMe } = context;

  const handleOnChange = (e) => {
    setcontactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = (e) => {
    const response = handleContactMe(contactInfo.name, contactInfo.email, contactInfo.text);
    console.log(response);
  }

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__image-container">
            <img
              src={profilephoto}
              alt="me"
              className="contact__content__image"
            />
          </div>
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                  onChange={handleOnChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  onChange={handleOnChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="text"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  onChange={handleOnChange}
                />
                <label htmlFor="text" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button onClick={handleOnSubmit}>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
