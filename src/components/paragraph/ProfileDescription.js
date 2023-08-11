import { Box, Heading, Text, Link, Icon } from '@chakra-ui/react';
import { BsLinkedin } from 'react-icons/bs';

const ProfileDescription = () => {
  // This function redirects to LinkedIn
  const redirectToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/yourLinkedInProfile/';
  };

  return (
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
      lineHeight="1.2"
    >
      <Heading as="h2" size="xl" textAlign={'center'}>
        <Text fontStyle="italic" textAlign={'center'}>
          👋 Hey there, adventurous internet traveler! <br />
          Welcome to my little corner of the digital universe. I&apos;m Reed, a
          tech enthusiast, code wizard, and an avid lover of all things web.
          Whether you&apos;re here to peek at my latest projects or just
          stumbled upon this space by accident, I&apos;m glad you&apos;re here.{' '}
          <br />
          Grab a virtual coffee ☕, scroll around, and{' '}
          <Link
            onClick={redirectToLinkedIn}
            color="teal.500"
            fontWeight="bold"
            fontSize="1.2em"
            textDecoration="none"
            _hover={{
              color: 'blue.500',
              transform: 'scale(1.2)',
              transition: 'all 0.3s ease',
            }}
          >
            let&apos;s connect <Icon as={BsLinkedin} boxSize={8} ml={2} p={1} />{' '}
          </Link>
          . After all, the internet&apos;s all about bringing amazing people
          (like you!) together.
        </Text>
      </Heading>
    </Box>
  );
};

export default ProfileDescription;
