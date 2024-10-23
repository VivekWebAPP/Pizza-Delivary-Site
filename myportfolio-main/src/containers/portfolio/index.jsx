import React, { useEffect, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill, BsGithub } from "react-icons/bs"; 
import "./styles.scss"; 
import AdminDashboard from '../../images/admin-dashboard-sticker.png';
import PizzaDelivery from '../../images/pizza-delivery-illustration-portfolio-image.png'
import RealTimeChat from '../../images/Real-Time-Chat-Application-Sticker.png';
import Ecommerce from '../../images/e-commerce-website-stricker-portfolio-image.png';
import inotebook from '../../images/inotebook-sticker.png';
import expenseTracker from '../../images/expense-tracker-sticker.jpg';
import snapshort from '../../images/Image-Gallery-Sticker.png';
import monkeyNewsApp from '../../images/Monkey-News-app-sticker.png';
import measurmentConverter from '../../images/measurement-converter-app-sticker.png';
import quizApp from '../../images/quiz-app-sticker.jpeg';
import stopwatch from '../../images/stop-watch-app-sticker.jpeg';
import calculator from '../../images/calculator-app-sticker.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const portfolioData = [
  {
    id: 2,
    name: "Admin Dashboard",
    image: AdminDashboard,
    link: "",
    description:
      "An admin dashboard created using ReactJS for managing tasks and expenses, with functionalities to create, delete, and visualize data through various graphs.",
    github: "",
  },
  {
    id: 2,
    name: "Pizza Delivery App",
    image: PizzaDelivery,
    link: "",
    description:
      "A Pizza Delivery App built with ReactJS featuring login, signup, cart functionality, and Google Maps integration to visualize distance, route, and delivery time from shop to your location.",
    github: "",
  },
  {
    id: 2,
    name: "Real Time Chat",
    link: "",
    image: RealTimeChat,
    description:
      "A Real-Time Chat Application built with ReactJS and Socket.IO, offering real-time chat, online status, unique profile photo assignment, and secure login and sign-up authentication.",
    github:"",
  },
  {
    id: 2,
    name: "E-Commerce",
    image: Ecommerce,
    link: "",
    description:
      "An E-Commerce Website built with ReactJS featuring login, sign-up, product description pages, add-to-cart functionality, and frontend integration for payment gateways.",
      github:"",
  },
  {
    id: 2,
    name: "I-Notebook",
    image: inotebook,
    link: "",
    description:
      "An online notes website built with ReactJS, offering login, sign-up, and functionalities to add, view, update, and delete notes.",
    github:"",
  },
  {
    id: 2,
    name: "Expense Tracker",
    image: expenseTracker,
    link: "",
    description:
      "An Expense Tracker website built with ReactJS, allowing users to add, update, and delete expenses, manage multiple budgets, and visualize data using pie charts.",
    github:"",
  },
  
  {
    id: 2,
    name: "SnapShort",
    image: snapshort,
    link: "",
    description:
      "An Image Gallery website built with ReactJS using the Pixabay API, enabling users to search images, bookmark them, and copy URLs for downloading.",
    github:"",
  },
  {
    id: 2,
    name: "Monkey News App",
    image: monkeyNewsApp,
    link: "",
    description:
      "A News Website built with ReactJS using the News API, allowing users to view news in categories like business, entertainment, and sports.",
    github:"",
  },
  {
    id: 3,
    name: "Converter",
    image: measurmentConverter,
    link: "",
    description:
      "A Measurement Converter Android app built using Java for easy and accurate unit conversions.",
  },
  {
    id: 3,
    name: "Quiz APP",
    image: quizApp,
    link: "",
    description:
      "A Quiz Android App built using Java, offering interactive and engaging quizzes for users.",
  },
  {
    id: 3,
    name: "Stop Watch",
    image: stopwatch,
    link: "",
    description:
      "A Stopwatch Android App built using Java for precise time tracking and easy usability. ",
  },
  {
    id: 3,
    name: "Calculator",
    image: calculator,
    link: "",
    description:
      "A Calculator Android App built using Java for quick and accurate mathematical calculations.",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "App Development",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 3000 
    });
  }, []);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {portfolioData
            .filter(
              (item) =>
                filteredValue === 1 || item.id === filteredValue
            )
            .map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                data-aos="fade-up" // Define AOS animation here
                data-aos-duration="1000" // Define duration here (in milliseconds)
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      {item.github && ( // Check if github link exists
                        <BsGithub
                          size={30}
                          className="github-icon"
                          onClick={() =>
                            window.open(item.github, "_blank")
                          }
                        />
                      )}
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                      <button onClick={() => window.open(item.link, "_blank")}>
                        Visit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
