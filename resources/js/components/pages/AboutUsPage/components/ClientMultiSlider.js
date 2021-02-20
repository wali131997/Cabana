import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
export default class MultiSlider extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };

    const clientData = [
      {
        qoute:
          "There are many variations of lorep isem text just used as the dumy text",
        name: "Mike Hardson",
        image: "/assets/images/demo-profile2.jpeg",
      },
      {
        qoute:
          "There are many variations of lorep isem text just used as the dumy text",
        name: "Mike Hardson",
        image: "/assets/images/demo-profile2.jpeg",
      },
      {
        qoute:
          "There are many variations of lorep isem text just used as the dumy text",
        name: "Mike Hardson",
        image: "/assets/images/demo-profile2.jpeg",
      },
      {
        qoute:
          "There are many variations of lorep isem text just used as the dumy text",
        name: "Mike Hardson",
        image: "/assets/images/demo-profile2.jpeg",
      },
      {
        qoute:
          "There are many variations of lorep isem text just used as the dumy text",
        name: "Mike Hardson",
        image: "/assets/images/demo-profile2.jpeg",
      },
    ];
    return (
      <Carousel
        // swipeable={false}
        // draggable={false}
        showDots={true}
        responsive={responsive}
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {clientData.map((item) => {
          return (
            <div className="clientCard">
              <div className="clientInfoBox">
                <div className="clientCircleIcon">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size="sm"
                    color="#fff"
                    className="ml-1"
                  />
                </div>
                <p className="aboutDetailText clientCardText">{item.qoute}</p>
                <div className="centerBox">
                  <img
                    src={item.image}
                    alt="client Image 123"
                    className="clientImage"
                  ></img>
                </div>
                <h4 className="clientTitle">{item.name}</h4>
              </div>
            </div>
          );
        })}
      </Carousel>
    );
  }
}
