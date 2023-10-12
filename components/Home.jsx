import React from 'react'
import { Box, Container, Heading,Image, Stack } from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/h5.webp'

const headingsOptions= {
    pos:"absolute",
    left:"50%",
    top:"50%",
    Transform:"translate(-50% -50%)",
    TextTransform:"uppercase",
    p:"4",
    size:"4xl",
}

const Home = () => {
  return  <Box>
 <MyCarousel />
 <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
 <Heading 
textTransform={'uppercase'}
py={'2'}
w={'fit-content'} 
m={'auto'}
border-bottom={'2px solid'}
>About
</Heading>

<Stack
 h={'full'}
 p={'4'}
 alignItems={'center'}
 justifyContent={'center'}
 direction={['column','row']}

 >
  <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />

<text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
"Welcome to the thrilling and dynamic world of virtual reality (VR) on our website, where the digital realm meets reality in groundbreaking ways. Virtual reality is no longer science fiction; it's an evolving technology that's changing the way we interact with the digital world and beyond.

Immerse yourself in a transformative experience as you explore the limitless potential of VR. From cutting-edge VR hardware to an extensive library of software and applications, we're your one-stop destination for all things VR. Whether you're a seasoned enthusiast or a curious newcomer, our website provides a comprehensive resource to satisfy your curiosity.

Discover the breathtaking array of applications that VR offers. Dive into the immersive worlds of VR gaming, where you can embark on epic adventures, solve complex puzzles, or engage in thrilling multiplayer battles. But VR is not limited to gaming – it's transforming industries like education, healthcare, architecture, and entertainment. Explore how VR is revolutionizing training and simulations, enhancing medical procedures, and enabling architects to walk through virtual buildings.

Stay informed about the latest VR innovations, from breakthroughs in VR headsets and controllers to new software and content releases. We provide in-depth reviews, expert analysis, and comprehensive guides to help you make informed decisions about your VR setup and experiences.

The journey into the world of virtual reality is an exciting one, and we're here to guide you every step of the way. Our goal is to bring you the latest news, insights, and trends in the world of VR, so you can fully embrace the digital evolution. Whether you're interested in the technology, its applications, or its impact on society, our website is your virtual gateway to an extraordinary world that is limited only by your imagination.

Join us in pushing the boundaries of reality and uncover the incredible potential of virtual reality – the future is now, and it's right at your fingertips."

</text>
</Stack>
 </Container>
  </Box>;
};
const MyCarousel = ()=>(
<Carousel 
autoPlay 
infiniteLoop
interval={1000}
showStatus={false}
showThumbs={false} 
showArrows={false}
>
<Box w="full" h="100vh">
    <Image src={img1} />
    <Heading bgColor="blackAlpha.600" color="white" {...headingsOptions}>Watch the Future</Heading>
</Box>

<Box w="full" h="100vh">
    <Image src={img4}  />
    <Heading bgColor="blackAlpha.600" color="white" {...headingsOptions}>Future is Gaming</Heading>
</Box>

<Box w="full" h="100vh">
    <Image src={img2}  />
    <Heading bgColor="blackAlpha.600" color="white" {...headingsOptions}>Gaming is Console</Heading>
</Box>

<Box w="full" h="100vh">
    <Image src={img3}  />
    <Heading bgColor="blackAlpha.600" color="white" {...headingsOptions}>NightLife is Cool</Heading>
</Box>
  

</Carousel>
)
export default Home
