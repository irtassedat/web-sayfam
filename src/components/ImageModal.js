import Modal from "react-modal";
import React from "react";
import Slider from "react-slick";
import { IoCloseCircle } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "#fff",
    overflow: "hidden",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "90%",
    maxHeight: "90%",
  },
};

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

function ImageModal({ isOpen, onRequestClose, images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div style={{ position: "relative" }}>
        <IoCloseCircle
          onClick={onRequestClose}
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            cursor: "pointer",
            color: "red",
            fontSize: "30px",
            zIndex: 30,
          }}
        />
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={img}
                style={{ width: "100%", height: "auto" }}
                alt="Modal"
              />
            </div>
          ))}
        </Slider>
      </div>
    </Modal>
  );
}

export default ImageModal;
