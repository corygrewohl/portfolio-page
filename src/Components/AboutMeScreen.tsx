import React from "react";
import { Box, Stack, Heading, Image } from "@chakra-ui/react";

import AboutMePic from "../assets/aboutmepic.jfif";
import ReactPic from "../assets/Skills/react.png";
import HTMLPic from "../assets/Skills/html.png";
import CSSPic from "../assets/Skills/css.png";
import JSPic from "../assets/Skills/js.png";
import TSPic from "../assets/Skills/ts.png";
import ReduxPic from "../assets/Skills/redux.png";
import StyledCompnentsPic from "../assets/Skills/styled-components.png";

function AboutMeScreen() {
  return (
    <>
      <Box minH='750px' bg={['#181c21']} color='#e1e2e2' padding={['2em', null, '4em 12em 2em 12em']} className='aboutme'>
        <Heading as='h2' fontSize='45px' fontWeight='500' alignSelf='flex-start'>😎About Me</Heading>
        <Stack padding={['2em', null]} spacing="50px" justifyContent="center" alignItems='center' direction={["column", null, null, null, "row"]}>
          <Image src={AboutMePic} maxH={['500px', null, null, '550px']} border='4px solid #e1e2e2' borderRadius='10px' />
          <Box maxW="500px">
            Hi, my name is Cory Grewohl and I'm currently a senior computer
            science major at California Baptist University. At the end of my
            junior year I felt I had learned a lot, but I wanted to pick one
            area to really dive into. I loved creating Guavah in{" "}
            <Image src={ReactPic} maxH="22px" w="auto" display="inline" />
            React Native for my junior capstone class, so I decided to focus on
            web development to learn{" "}
            <Image src={ReactPic} maxH="22px" w="auto" display="inline" />
            React, but first I knew I had to go back to the basics.
            <br />
            <br />
            So, starting in May 2022, I started learning everything I could
            about <Image src={HTMLPic} maxH="22px" w="auto" display="inline" />
            HTML, <Image src={CSSPic} maxH="22px" w="auto" display="inline" />
            CSS, and <Image src={JSPic} maxH="22px" w="auto" display="inline" />
            Javascript by making as many projects I could. And for the last few
            months I have dove into the{" "}
            <Image src={ReactPic} maxH="22px" w="auto" display="inline" />
            React ecosystem, trying to learn as much about{" "}
            <Image src={ReactPic} maxH="22px" w="auto" display="inline" />
            React as I can, and learn the important related technologies like{" "}
            <Image src={TSPic} maxH="22px" w="auto" display="inline" />
            Typescript,{" "}
            <Image src={ReduxPic} maxH="22px" w="auto" display="inline" />
            Redux,{" "}
            <Image src={StyledCompnentsPic} maxH="22px" w="auto" display="inline" />
            Styled-Components, and more by creating multiple projects.
            <br />
            <br />
            In my free time I like to skateboard, hang out with friends, eat,
            and play guitar. I also love Lego, cats, and movies. I honestly
            really do enjoy front end development and I'm eager to learn more,
            including learning backend technologies.
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default AboutMeScreen;
