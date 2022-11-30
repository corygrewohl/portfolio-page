import { FC, useState } from "react";
import { Carousel } from "./ProjectCarousel.styled";
import { Swiper, SwiperSlide } from "swiper/react";

import Github from "../assets/github.svg";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Button, ButtonGroup, createIcon, Icon } from "@chakra-ui/react";

interface ProjectCarouselProps {
  slides: {
    id: number;
    name: string;
    description: string;
    image: string;
    skills: string[];
    date: string;
    repo: string;
    demo: string;
  }[];
}

const ProjectCarousel: FC<ProjectCarouselProps> = ({ slides }) => {

  const slideArray = slides.map((slide, index) => {
    return (
      <SwiperSlide className="project-slide">
        <img src={slide.image} alt="" className="image" />
        <h3>{slide.name}</h3>
        <p>{slide.description}</p>
        <div className="skills">
          {slide.skills.map((currentSkill, index) => {
            return (
              <img
                className="skill-icon"
                key={index}
                src={currentSkill}
                alt=""
              />
            );
          })}
        </div>
        <ButtonGroup colorScheme="blue" size="lg">
          <Button fontSize="30px">
            <a href={slide.repo} target="_blank">
              Repo&nbsp;
              <span style={{ fontSize: "28px", fontWeight: "400" }}>
                {"</>"}
              </span>
            </a>
          </Button>
          <Button rightIcon={<ExternalLinkIcon />} fontSize="30px">
            <a href={slide.demo} target="_blank">
              Live
            </a>
          </Button>
        </ButtonGroup>
      </SwiperSlide>
    );
  });

  return (
    <Carousel>
      <Swiper
        id="main"
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
      >
        {slideArray}
      </Swiper>
    </Carousel>

    /* {slides.map((slide, index) => {
        return (
          <SwiperSlide>
            <img src={slide.image} alt="" className="image" />
            <h2>test</h2>
          </SwiperSlide>
        );
      })} */
  );
};

export default ProjectCarousel;
