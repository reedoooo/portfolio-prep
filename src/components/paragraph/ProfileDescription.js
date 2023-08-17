import { Box, Link, Icon, useTheme } from '@chakra-ui/react';
import { BsLinkedin } from 'react-icons/bs';
import ReusableParagraph from '../../pages/utils/ReusableParagraph';

const ProfileDescription = () => {
  const { breakpoints } = useTheme();

  const redirectToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/yourLinkedInProfile/';
  };

  const commonStyles = {
    fontSize: {
      base: parseFloat(breakpoints.xs) * 1.4 + 'px',
      sm: parseFloat(breakpoints.sm) * 0.7 + 'px',
      md: parseFloat(breakpoints.md) * 0.6 + 'px',
      lg: parseFloat(breakpoints.sm) * 0.8 + 'px',
    },
  };

  return (
    <Box
      id="profile-description"
      mt={8}
      mb={8}
      height="50%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      zIndex="100"
      textAlign="center"
      lineHeight="1.2"
      mx="auto" // Center the box
    >
      {/* <Heading
        as="h2"
        flexGrow={1}
        fontSize={['1.2em', '1.2em', '1.8em', '2em', '2.5em']}
        textAlign="center"
      > */}
      <ReusableParagraph
        style={{
          ...commonStyles,
          color: 'white',
          textAlign: 'center',
          lineHeight: {
            base: parseFloat(breakpoints.xs) * 1.3 + 'px',
            sm: parseFloat(breakpoints.sm) * 0.8 + 'px',
            md: parseFloat(breakpoints.md) * 0.8 + 'px',
            lg: parseFloat(breakpoints.sm) * 0.9 + 'px',
          },
          fontStyle: 'italic',
          mt: 6,
        }}
      >
        👋 Hey there, adventurous internet traveler! <br />
        Welcome to my little corner of the digital universe. I&apos;m Reed, a
        tech enthusiast, code wizard, and an avid lover of all things web.
        Whether you&apos;re here to peek at my latest projects or just stumbled
        upon this space by accident, I&apos;m glad you&apos;re here.
        <br /> Grab a virtual coffee ☕, scroll around, and{' '}
        <Link
          onClick={redirectToLinkedIn}
          color="teal.500"
          fontWeight="bold"
          {...commonStyles}
          textDecoration="none"
          _hover={{
            color: 'blue.500',
            transform: 'scale(1.2)',
            transition: 'all 0.3s ease',
          }}
        >
          let&apos;s connect{''}
          <Icon
            as={BsLinkedin}
            boxSize="1.2em" // Adjusted size to match text
            verticalAlign="middle"
            ml={2}
            p={1}
          />{' '}
        </Link>
        . After all, the internet&apos;s all about bringing amazing people (like
        you!) together.
      </ReusableParagraph>
      {/* </Heading> */}
    </Box>
  );
};

export default ProfileDescription;
