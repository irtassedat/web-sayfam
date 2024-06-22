import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from '../context/LanguageContext'; 
import { ProjectsData } from "../data/ProjectsData";
import ImageModal from "./ImageModal";
import laptopScreen from "../images/laptopscreen.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", background: "red", zIndex: 25 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", background: "red", zIndex: 25 }}
      onClick={onClick}
    />
  );
}

function Projects() {
  const { language } = useLanguage(); 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: modalIsOpen ? null : <SampleNextArrow />,
    prevArrow: modalIsOpen ? null : <SamplePrevArrow />,
  };

  const openModal = (images) => {
    setCurrentImages(images);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={`container mx-auto bg-white dark:bg-myDarkG dark:text-red py-20 ${modalIsOpen ? 'overflow-hidden' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-medium text-center mb-16">Projects</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {ProjectsData.map((project, index) => (
            <div
              key={project.name}
              className="flex flex-col w-full md:w-1/2 lg:w-1/3 px-4 gap-5 rounded-xl shadow-lg"
              style={{
                backgroundColor: project.backgroundColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h2 className="text-xl text-center font-playfair font-bold mt-6 mb-4">
                  {project.name}
                </h2>
                <p className="text-center mb-4">{project.explanation[language]}</p> {/* Dili kullanarak açıklamayı alın */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.libraries.map((library, libIndex) => (
                    <span
                      key={`${project.name}-${library}-${libIndex}`}
                      className="bg-white dark:bg-red-200 font-playfair font-bold text-sm rounded-full px-5 py-2 mb-2"
                    >
                      {library}
                    </span>
                  ))}
                </div>
                <div className="flex justify-around items-center mb-6">
                  <a href={project.gitHubLink} className="text-blue-600 hover:underline">
                    View on GitHub
                  </a>
                  <a href={project.vercelLink} className="text-blue-600 hover:underline">
                    Go to app →
                  </a>
                </div>
              </div>
              <div
                onClick={() => openModal(project.imgsrc)}
                className="cursor-pointer relative"
                style={{
                  background: `url(${laptopScreen}) no-repeat center center`,
                  backgroundSize: "contain",
                  padding: "3rem",
                  height: "300px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="relative" style={{ width: "100%", height: "100%", maxWidth: "600px", maxHeight: "300px" }}>
                  <Slider {...settings}>
                    {project.imgsrc.map((img, imgIndex) => (
                      <div key={imgIndex} className="flex items-center justify-center">
                        <img
                          src={img}
                          alt={`Project ${project.name} Slide ${imgIndex + 1}`}
                          className="rounded-md object-contain"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} images={currentImages} />
    </div>
  );
}

export default Projects;
