// import { Box } from '@chakra-ui/react';
// import ProfileParagraph from './ProfileParagraph';

// const ProfileDescription = () => (
//   <Box width="90%" mt={8} height="50%" flexGrow={1}>
//     <ProfileParagraph>
//       Hi there! I&apos;m Reed Vogt, a Full Stack Web Developer from Seattle, WA,
//       delivering creative and user-centric software solutions.
//     </ProfileParagraph>

//     <ProfileParagraph>
//       My arsenal is well-stocked with JavaScript, React.js, Node.js, and AWS -
//       all aimed at developing software that is both functional and
//       user-friendly. Leveraging a solid foundation in computer science,
//       I&apos;ve honed my skills in both front-end and back-end development.
//     </ProfileParagraph>

//     <ProfileParagraph>
//       Whether it&apos;s HTML5, CSS3, JavaScript, SQL, or a new language or tool
//       in the software industry, I pride myself on my adaptability and ongoing
//       commitment to learning.
//     </ProfileParagraph>

//     <ProfileParagraph>
//       Throughout my career, I&apos;ve been fortunate to work on a wide range of
//       projects. From developing a personal portfolio and a work organizer web
//       app to creating a YuGiOh TCG deck builder, these projects have refined my
//       programming capabilities, honed my problem-solving skills, and deepened my
//       understanding of what users want.
//     </ProfileParagraph>
//   </Box>
// );

// export default ProfileDescription;
import { Box, Heading, Text } from '@chakra-ui/react';

const ProfileDescription = () => (
  <Box
    id="profile-description"
    width="90%"
    mt={8}
    mb={8}
    height="50%"
    flexGrow={1}
    zIndex={'100'}
    textAlign={'center'}
    justifyContent={'center'}
  >
    <Heading as="h2" size="xl" textAlign={'center'}>
      <Text fontStyle="italic" textAlign={'center'}>
        Seattle-based Full Stack Developer, Reed Vogt, leverages a robust
        Computer Science background to deliver functional, user-centric
        software. Expert in JavaScript, React.js, Node.js, and AWS, with a
        career reflecting diverse projects and ongoing technical skill
        enhancement.
      </Text>
    </Heading>
  </Box>
);

export default ProfileDescription;
