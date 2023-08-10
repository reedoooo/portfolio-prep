// import { GridItem, Box, Heading, Text } from '@chakra-ui/react';
// import React from 'react';

// const AboutMe = () => (
//   <GridItem
//     display="flex"
//     justifyContent="center"
//     alignItems="center"
//     backgroundColor="transparent"
//   >
//     <Box maxWidth={{ base: '100%', md: '100%' }} w="full">
//       <Heading as="h4" size="lg" color={'white'}>
//         About Me
//       </Heading>
//       <Text
//         fontSize={{ base: 'md', md: 'xl' }}
//         color={'white'}
//         textAlign={'left'}
//         lineHeight={'9'}
//       >
//         Hi there! I&apos;m an enthusiastic coder with a passion for solving
//         complex problems and creating intuitive, efficient solutions. I thrive
//         on the unique challenges that each new coding project brings and
//         continuously learn new technologies to stay on top of the fast-evolving
//         tech landscape. <br />
//         <br />
//         In addition to my love for coding, I&apos;m also an avid trading card
//         collector and organizer. I find immense satisfaction in categorizing my
//         cards and meticulously maintaining my collection. This hobby of mine not
//         only brings joy but also enhances my ability to categorize, organize and
//         manage data - skills that transfer over quite well into my coding
//         career. <br />
//         <br />
//         Anime is another passion of mine and I often find myself immersed in the
//         vivid worlds and intricate storylines it offers. It&apos;s fascinating
//         how this form of art can bring complex characters and scenarios to life,
//         sparking creativity and out-of-the-box thinking - another attribute I
//         channel into my coding journey.
//         <br />
//         <br />
//         As an individual, I am friendly, responsible, and always up for a good
//         intellectual challenge. I firmly believe that one&apos;s attitude plays
//         a significant role in their success, and I strive to approach each task
//         with positivity and determination.
//       </Text>
//     </Box>
//   </GridItem>
// );

// export default AboutMe;
import { GridItem, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const AboutMe = () => (
  <GridItem
    id="resume-about-me"
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor="transparent"
    p={{ base: 6, lg: 12 }} // Padding increased by 1.5
    m={{ base: 3, lg: 6 }} // Margin increased by 1.5
  >
    <Box w="full">
      <Heading
        as="h4"
        size="lg"
        color={'white'}
        textAlign={{ base: 'left', lg: 'center' }} // Centered heading on large screens
      >
        About Me
      </Heading>
      <Text
        fontSize={{ base: 'sm', md: 'md', lg: '3xl' }} // Increased font size on larger screens
        color={'white'}
        textAlign={'left'}
        lineHeight={{ base: '7', md: '8', lg: '9' }}
        mt={6} // Added margin top for separation and increased by 1.5
        fontStyle="italic" // Italicized text
      >
        I&apos;m Reed Vogt, a Full Stack Web Developer from Seattle, WA. With a
        passion for delivering creative and user-centric software solutions, my
        expertise spans JavaScript, React.js, Node.js, and AWS. My hobbies
        include anime and trading card games, with a special mention for a
        YuGiOh TCG deck builder that I created.
      </Text>
    </Box>
  </GridItem>
);

export default AboutMe;
