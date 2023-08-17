import { Box, useTheme } from '@chakra-ui/react';
import ReusableParagraph from '../../pages/utils/ReusableParagraph';
import HeaderCreator from '../../pages/utils/HeaderCreator';

const AboutMe = () => {
  const theme = useTheme(); // Hook to get theme properties

  return (
    <Box
      width="100%" // Explicitly set the width to 100%
      height={'100%'}
      flexGrow={1}
      display="flex"
      flexDirection="column"
      alignItems={'center'}
      justifyContent={'center'}
      id="aboout-me"
    >
      {/* <ReusableHeader headerText="About Me" color="white" /> */}
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        w={'50%'}
        ml={'auto'}
        mr={'auto'}
      >
        {HeaderCreator('about')} {/* Modified this line */}
      </Box>
      <ReusableParagraph
        id="aboout-me-paragraph"
        style={{
          fontSize: {
            base: parseFloat(theme.breakpoints.xs) * 1.2 + 'px',
            sm: parseFloat(theme.breakpoints.sm) * 0.8 + 'px',
            md: parseFloat(theme.breakpoints.md) * 0.55 + 'px',
            lg: parseFloat(theme.breakpoints.sm) * 0.75 + 'px',
          },
          color: 'white',
          textAlign: 'left',
          lineHeight: {
            base: parseFloat(theme.breakpoints.xs) * 1.4 + 'px',
            sm: parseFloat(theme.breakpoints.sm) * 1.3 + 'px',
            md: parseFloat(theme.breakpoints.md) * 1.25 + 'px',
            lg: parseFloat(theme.breakpoints.sm) * 1.6 + 'px',
          },
          mt: 6,
          fontStyle: 'italic',
        }}
      >
        I&apos;m Reed Vogt, a Full Stack Web Developer from Seattle, WA. With a
        passion for delivering creative and user-centric software solutions, my
        expertise spans JavaScript, React.js, Node.js, and AWS. My hobbies
        include anime and trading card games, with a special mention for a
        YuGiOh TCG deck builder that I created.
      </ReusableParagraph>
    </Box>
  );
};

export default AboutMe;

// import { GridItem, Box, useTheme } from '@chakra-ui/react';
// import ReusableHeader from '../../pages/utils/ReusableHeader';
// import ReusableParagraph from '../../pages/utils/ReusableParagraph';

// const AboutMe = () => {
//   const theme = useTheme(); // Hook to get theme properties
//   return (
//     <GridItem
//       id="resume-about-me"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       backgroundColor="transparent"
//       p={{ base: 6, lg: 12 }}
//       m={{ base: 3, lg: 6 }}
//     >
//       <Box
//         width="100%"
//         flexGrow={1}
//         display="flex"
//         flexDirection="column"
//         alignItems={'center'}
//         justifyContent={'center'}
//       >
//         <ReusableHeader headerText="About Me" color="white" />

//         <ReusableParagraph
//           style={{
//             fontSize: {
//               // base: theme.breakpoints.xs,
//               // sm: theme.breakpoints.sm,
//               // md: theme.breakpoints.md,
//               // lg: theme.breakpoints.sm,
//             },
//             color: 'white',
//             textAlign: 'left',
//             lineHeight: {
//               // base: theme.breakpoints.xs,
//               // sm: theme.breakpoints.sm,
//               // md: theme.breakpoints.md,
//               // lg: theme.breakpoints.lg,
//             },
//             mt: 6,
//             fontStyle: 'italic',
//           }}
//         >
//           I&apos;m Reed Vogt, a Full Stack Web Developer from Seattle, WA. With
//           a passion for delivering creative and user-centric software solutions,
//           my expertise spans JavaScript, React.js, Node.js, and AWS. My hobbies
//           include anime and trading card games, with a special mention for a
//           YuGiOh TCG deck builder that I created.
//         </ReusableParagraph>
//       </Box>
//     </GridItem>
//   );
// };

// export default AboutMe;

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
